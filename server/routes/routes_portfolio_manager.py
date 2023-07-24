from flask import render_template, request, redirect, url_for, flash, jsonify
from config import app
from models.PortfolioManagerModel import PortfolioManager
from config import mongo
from flask_bcrypt import Bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

key = os.getenv('JWTSECRETKEY') 

@app.route('/')
def index():
    print("Welcome to the home backend running")
    # flash("Welcome to the home backend running")
    return render_template("index.html")

# manger signup


@app.route('/signup', methods=['POST'])
def create_portfolio_manager():
    data = request.json
    name = data['username']
    role = data['role']
    bio = data['bio']
    password = data['password']
    email = data['email']

    # Check if the email is already registered
    existing_manager = mongo.db.portfolio_managers.find_one({'email': email})
    if existing_manager:
        return jsonify({'message': 'Email already registered. Please use a different email.'}), 409

     # Hash the password before storing it
    bcrypt = Bcrypt(app)
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    portfolio_manager = PortfolioManager(
        name, hashed_password, role, bio, email)  # This order matters
    portfolio_manager_id = str(mongo.db.portfolio_managers.insert_one(
        portfolio_manager.__dict__).inserted_id)
    return jsonify({'message':  "User created successfully!", 'id': portfolio_manager_id}), 201


# user login route

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    # Check if the email is registered
    portfolio_manager = mongo.db.portfolio_managers.find_one({'email': email})
    if not portfolio_manager:
        return jsonify({'message': 'You have not registered. Please sign up first.'}), 401

    # Verify the password using bcrypt
    bcrypt = Bcrypt(app)
    hashed_password = portfolio_manager['password']
    if not bcrypt.check_password_hash(hashed_password, password):
        return jsonify({'message': 'Invalid credentials. Please check your email and password.'}), 401

    # Create a JSON Web Token (JWT)
    jwt_payload = {
        'user_id': str(portfolio_manager['_id']),
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)  # Token expires in 1 day
    }
    jwt_secret = key  # Replace this with your own secret key
    token = jwt.encode(jwt_payload, jwt_secret, algorithm='HS256')

    return jsonify({'message': 'Login successful!', 'token': token}), 200


# Getting all managers

@app.route('/portfolio-managers', methods=['GET'])
def get_all_portfolio_managers():
    portfolio_managers = mongo.db.portfolio_managers.find()
    result = [{'_id': str(pm['_id']), 'name': pm['name'],
               'role': pm['role'], 'bio': pm['bio']} for pm in portfolio_managers]
    return jsonify(result), 200


# Getting one manager by their specific and unique id

@app.route('/portfolio-managers/<string:id>', methods=['GET'])
def get_portfolio_manager_by_id(id):
    portfolio_manager = mongo.db.portfolio_managers.find_one(
        {'_id': mongo.ObjectId(id)})
    if portfolio_manager:
        result = {'_id': str(portfolio_manager['_id']),
                  'name': portfolio_manager['name'],
                  'role': portfolio_manager['role'],
                  'bio': portfolio_manager['bio']}
        return jsonify(result), 200
    else:
        return jsonify({'message': 'Portfolio Manager not found'}), 404


# Update Managers

@app.route('/portfolio-managers/<string:id>', methods=['PATCH'])
def update_portfolio_manager(id):
    data = request.json
    name = data['name']
    role = data['role']
    bio = data['bio']

    portfolio_manager = mongo.db.portfolio_managers.find_one(
        {'_id': mongo.ObjectId(id)})
    if portfolio_manager:
        mongo.db.portfolio_managers.update_one({'_id': mongo.ObjectId(id)}, {
                                               '$set': {'name': name, 'role': role, 'bio': bio}})
        return jsonify({'message': 'Portfolio Manager updated successfully'}), 200
    else:
        return jsonify({'message': 'Portfolio Manager not found'}), 404


# Delete a portfolio manager

@app.route('/portfolio-managers/<string:id>', methods=['DELETE'])
def delete_portfolio_manager(id):
    portfolio_manager = mongo.db.portfolio_managers.find_one(
        {'_id': mongo.ObjectId(id)})
    if portfolio_manager:
        mongo.db.portfolio_managers.delete_one({'_id': mongo.ObjectId(id)})
        return jsonify({'message': 'Portfolio Manager deleted successfully'}), 200
    else:
        return jsonify({'message': 'Portfolio Manager not found'}), 404

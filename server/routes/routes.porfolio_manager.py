from flask import render_template, request, redirect, url_for, flash, jsonify
from config import app
from models.PortfolioManagerModel import PortfolioManager
from config import mongo

@app.route('/')
def index():
    print("Welcome to the home backend running")
    flash("Welcome to the home backend running")
    return render_template("index.html")

# manger signup

@app.route('/portfolio-managers-signup', methods=['POST'])
def create_portfolio_manager():
    data = request.json
    name = data['name']
    status = data['status']
    role = data['role']
    bio = data['bio']
    start_date = data['start_date']

    portfolio_manager = PortfolioManager(name, status, role, bio, start_date)
    portfolio_manager_id = str(mongo.db.portfolio_managers.insert_one(
        portfolio_manager.__dict__).inserted_id)
    return jsonify({'message': 'Portfolio Manager created successfully!', 'id': portfolio_manager_id}), 201


# Getting all managers

@app.route('/portfolio-managers', methods=['GET'])
def get_all_portfolio_managers():
    portfolio_managers = mongo.db.portfolio_managers.find()
    result = [{'_id': str(pm['_id']), 'name': pm['name'], 'status': pm['status'],
               'role': pm['role'], 'bio': pm['bio'], 'start_date': pm['start_date']} for pm in portfolio_managers]
    return jsonify(result), 200


# Getting one manager by their specific and unique id

@app.route('/portfolio-managers/<string:id>', methods=['GET'])
def get_portfolio_manager_by_id(id):
    portfolio_manager = mongo.db.portfolio_managers.find_one(
        {'_id': mongo.ObjectId(id)})
    if portfolio_manager:
        result = {'_id': str(portfolio_manager['_id']), 'name': portfolio_manager['name'],
                  'status': portfolio_manager['status'], 'role': portfolio_manager['role'],
                  'bio': portfolio_manager['bio'], 'start_date': portfolio_manager['start_date']}
        return jsonify(result), 200
    else:
        return jsonify({'message': 'Portfolio Manager not found'}), 404


# Update Managers

@app.route('/portfolio-managers/<string:id>', methods=['PATCH'])
def update_portfolio_manager(id):
    data = request.json
    name = data['name']
    status = data['status']
    role = data['role']
    bio = data['bio']
    start_date = data['start_date']

    portfolio_manager = mongo.db.portfolio_managers.find_one(
        {'_id': mongo.ObjectId(id)})
    if portfolio_manager:
        mongo.db.portfolio_managers.update_one({'_id': mongo.ObjectId(id)}, {'$set': {'name': name, 'status': status,
                                                                                      'role': role, 'bio': bio,
                                                                                      'start_date': start_date}})
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

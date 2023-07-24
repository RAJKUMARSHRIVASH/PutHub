from flask import render_template, request, redirect, url_for, flash, jsonify
from config import app
from models.PortfolioManagerModel import PortfolioManager
from config import mongo
from pymongo import MongoClient
import os

client = MongoClient(os.getenv('MONGOURL'))
db = client['PutHub'] 
projects_collection = db['projects']

# Add project

@app.route('/projects', methods=['POST'])
def create_project():
    data = request.json
    inserted_project = projects_collection.insert_one(data)
    return jsonify(str(inserted_project.inserted_id))


# Get all projects
@app.route('/projects', methods=['GET'])
def get_all_projects():
    projects = projects_collection.find()
    return jsonify(list(projects))


# Get specific project by it's id

@app.route('/projects/<string:id>', methods=['GET'])
def get_project_by_id(id):
    project = projects_collection.find_one({'_id': mongo.ObjectId(id)})
    if project:
        return jsonify(project)
    else:
        return jsonify({'message': 'Project not found'}), 404


# Update the project details by it's id

@app.route('/projects/<string:id>', methods=['PATCH'])
def update_project(id):
    data = request.json
    updated_project = projects_collection.update_one({'_id': mongo.ObjectId(id)}, {'$set': data})
    if updated_project.modified_count > 0:
        return jsonify({'message': 'Project updated successfully'})
    else:
        return jsonify({'message': 'Project not found'}), 404


# Delete a project using it's id

@app.route('/projects/<string:id>', methods=['DELETE'])
def delete_project(id):
    deleted_project = projects_collection.delete_one({'_id': mongo.ObjectId(id)})
    if deleted_project.deleted_count > 0:
        return jsonify({'message': 'Project deleted successfully'})
    else:
        return jsonify({'message': 'Project not found'}), 404

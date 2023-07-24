from flask import render_template, request, redirect, url_for, flash, jsonify
from config import app
from models.PortfolioManagerModel import PortfolioManager
from config import mongo
from pymongo import MongoClient
import os

client = MongoClient(os.getenv('MONGOURL'))
db = client['PutHub']
resources_collection  = db['resources']

# Add Resource

@app.route('/resources', methods=['POST'])
def create_resource():
    data = request.json
    inserted_resource = resources_collection.insert_one(data)
    return jsonify(str(inserted_resource.inserted_id))


# Get all resources
@app.route('/resources', methods=['GET'])
def get_all_resources():
    resources = resources_collection.find()
    return jsonify(list(resources))


# Get specific task by it's id

@app.route('/resources/<string:id>', methods=['GET'])
def get_resource_by_id(id):
    resource = resources_collection.find_one({'_id': mongo.ObjectId(id)})
    if resource:
        return jsonify(resource)
    else:
        return jsonify({'message': 'Resource not found'}), 404


# Update the task details by it's id

@app.route('/resources/<string:id>', methods=['PATCH'])
def update_resource(id):
    data = request.json
    updated_resource = resources_collection.update_one({'_id': mongo.ObjectId(id)}, {'$set': data})
    if updated_resource.modified_count > 0:
        return jsonify({'message': 'Resource updated successfully'})
    else:
        return jsonify({'message': 'Resource not found'}), 404


# Delete a project using it's id

@app.route('/resources/<string:id>', methods=['DELETE'])
def delete_resource(id):
    deleted_resource = resources_collection.delete_one({'_id': mongo.ObjectId(id)})
    if deleted_resource.deleted_count > 0:
        return jsonify({'message': 'Resource deleted successfully'})
    else:
        return jsonify({'message': 'Resource not found'}), 404


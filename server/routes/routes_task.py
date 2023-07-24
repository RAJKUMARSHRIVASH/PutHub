from flask import render_template, request, redirect, url_for, flash, jsonify
from config import app
from models.PortfolioManagerModel import PortfolioManager
from config import mongo
from pymongo import MongoClient
import os

client = MongoClient(os.getenv('MONGOURL'))
db = client['PutHub']
tasks_collection = db['tasks']

# Add Task


@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    inserted_task = tasks_collection.insert_one(data)
    return jsonify(str(inserted_task.inserted_id))


# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_all_tasks():
    tasks = tasks_collection.find()
    return jsonify(list(tasks))


# Get specific task by it's id

@app.route('/tasks/<string:id>', methods=['GET'])
def get_task_by_id(id):
    task = tasks_collection.find_one({'_id': mongo.ObjectId(id)})
    if task:
        return jsonify(task)
    else:
        return jsonify({'message': 'Task not found'}), 404


# Update the task details by it's id

@app.route('/tasks/<string:id>', methods=['PATCH'])
def update_task(id):
    data = request.json
    updated_task = tasks_collection.update_one(
        {'_id': mongo.ObjectId(id)}, {'$set': data})
    if updated_task.modified_count > 0:
        return jsonify({'message': 'Task updated successfully'})
    else:
        return jsonify({'message': 'Task not found'}), 404


# Delete a project using it's id

@app.route('/tasks/<string:id>', methods=['DELETE'])
def delete_task(id):
    deleted_task = tasks_collection.delete_one({'_id': mongo.ObjectId(id)})
    if deleted_task.deleted_count > 0:
        return jsonify({'message': 'Task deleted successfully'})
    else:
        return jsonify({'message': 'Task not found'}), 404

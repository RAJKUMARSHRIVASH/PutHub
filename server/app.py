from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from bson import ObjectId
import os
from dotenv import load_dotenv
from flask_cors import CORS
from config import app
from routes import routes_portfolio_manager
from routes import routes_project
from routes import routes_resource
from routes import routes_task

# Load environment variables from .env file
load_dotenv()

port = os.getenv('PORT') or 8000

# Enable CORS for all routes
CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
    # app.run()

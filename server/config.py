
from flask import Flask, request, jsonify
from bson import ObjectId
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# changing the path of the render_template to the another folder from the templates folder coz I don't have templates folder here
# Set the full path to the 'dist' folder of the React app
app = Flask(__name__, template_folder='../client/dist', static_folder='../client/dist')

app.config["MONGO_URI"] = os.getenv("MONGOURL")
mongo = PyMongo(app)

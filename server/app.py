from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from bson import ObjectId
import os
from dotenv import load_dotenv
from config import app

# # Import routes
# from routes.routes.porfolio_manager import *
# from project import *
# from resource import *
# from task import *

# # Import models
# from PortfolioManagerModel import *
# from ProjectModel import *
# from ResourceModel import *
# from TaskModel import *

# from routes.routes.porfolio_manager import *
# from routes.routes.project import *
# from routes.routes.resource import *
# from routes.routes.task import  *

# Load environment variables from .env file
load_dotenv()

port = os.getenv('PORT') or 8000

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
    # app.run()

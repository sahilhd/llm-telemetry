from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)
# error handle work around

app.config['SQLALCHEMY_BATABASE_URI'] = "sqlite:///storage_perf.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db instance for CRUD 
db = SQLAlchemy(app)


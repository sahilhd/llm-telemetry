#localhost:5000/enter_performance

from flask import request, jsonify 
from config import app, db 
from models import Contact

@app.route("/perf", methods=["GET"])
def get_performance():
    contacts = Contact.query.all() # get all the context 
    json_contacts = map(lambda x: x.to_json(), contacts) 
    return jsonify()
if __name__ == '__main__':
    with app.app_context():
        db.create_all() # start and create the models defined in db 
    app.run(debug=True)

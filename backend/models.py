from config import db 

class Contact(db.model): #inherit from model
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string(80), unique=False, nullable=False)


    def to_json(self):
        return {

            "id": self.id ,
            "firstName": self.first_name
        }
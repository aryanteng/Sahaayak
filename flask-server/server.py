from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# API ROUTE

@app.route('/members/', methods=['POST'])
def members():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print("jsonnn",json)
        return json
        
    return {"members": ["Members1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)
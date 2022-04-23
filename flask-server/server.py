from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# API ROUTE

@app.route('/members')
def members():
    return {"members": ["Members1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)
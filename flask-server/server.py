from flask import Flask

app = Flask(__name__)


# API ROUTE

@app.route('/members')
def members():
    return{"members": ["Members1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)
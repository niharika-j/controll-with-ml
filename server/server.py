from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "ConTroll"

@app.route("/api/isCommentTroll", methods=['POST'])
def isCommentTroll():
    # Access comment from request using request.form['comment']
    comment = request.form['comment']
    print(comment)
    # Replace below code with ML model classifying the comment and accordingly return a response
    response = {
        "isTroll": True,
        "confidence": 80
    }
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
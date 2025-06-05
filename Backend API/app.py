from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/about')
def about():
    return jsonify({
        "name": "Trần Hoài An",
        "job": "Lập trình viên",
        "bio": "Tôi thích học Flask và phát triển phần mềm."
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

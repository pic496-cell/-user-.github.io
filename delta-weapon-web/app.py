from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)

def load_data():
    with open("data/weapons.json","r",encoding="utf-8") as f:
        return json.load(f)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/weapons")
def weapons():
    data = load_data()
    return jsonify(data)

if __name__ == "__main__":
    app.run()
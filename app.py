
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/photo")
def photo():
    return render_template("photo.html")

@app.route("/word")
def word():
    return "<h1>Word to PDF - Coming Soon!</h1>"

if __name__ == "__main__":
    app.run(debug=True)

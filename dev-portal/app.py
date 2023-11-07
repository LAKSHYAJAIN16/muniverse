from flask import Flask

app = Flask(__name__)

@app.route("/hello-world!")
def function():
    return "hello world!"
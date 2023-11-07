from flask import Flask

app = Flask(__name__)

@app.route("/")
def function():
    return "Dev Server haha yes"

app.run(debug=True)
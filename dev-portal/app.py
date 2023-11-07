from flask import Flask
from dotenv import dotenv_values

config = dotenv_values(".env")
master_key = config["MASTER_DEVELOPER_KEY"]
app = Flask(__name__)

@app.route("/")
def function():
    return "Dev Server haha yes"

app.run(debug=True)
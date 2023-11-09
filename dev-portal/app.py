from flask import Flask, request
from dotenv import dotenv_values

config = dotenv_values(".env")
print(dict(config))
master_key = config["MASTER_DEVELOPER_KEY"]
app = Flask(__name__)

@app.route("/")
def index():
    return "Dev Server haha yes - I love my life"

@app.route("/load/excel", methods=["POST"])
def load_excel():
    data = request.get_json()
    if data["key"] == master_key:
        return "you're a good person"
    else:
        return "stfu you don't have the key get out of my API"

app.run(debug=True)
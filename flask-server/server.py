import flask


app = flask(__name__)

@app.route("/members")

def members():
    return {"members":["Member1","Member2","Member3"]}
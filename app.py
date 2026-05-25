from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load trained model
model = joblib.load(
    "model/fraud_model.pkl"
)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array(
        data["features"]
    ).reshape(1, -1)

    prediction = model.predict(
        features
    )

    result = (
        "Fraud"
        if prediction[0] == -1
        else "Safe"
    )

    return jsonify({
        "result": result
    })

if __name__ == "__main__":
    app.run(port=8000)
from flask import Flask, request, jsonify
import pickle
import cv2
import numpy as np
import os

app = Flask(__name__)

# Load trained KNN model
with open("car_damage_knn.pkl", "rb") as f:
    knn = pickle.load(f)

CATEGORIES = ["Damaged", "Whole"]  # Update labels

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded!"})

    file = request.files["image"]
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    # Process Image
    img = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    img_resized = cv2.resize(img, (100, 100)).flatten().reshape(1, -1)

    # Make Prediction
    prediction = knn.predict(img_resized)[0]
    result = CATEGORIES[prediction]

    return jsonify({"message": result})

if __name__ == "__main__":
    app.run(port=5001, debug=True)

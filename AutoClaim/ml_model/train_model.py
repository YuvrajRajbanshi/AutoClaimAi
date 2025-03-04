import os
import numpy as np
import cv2
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pickle

# Define dataset paths
TRAINING_PATH = "data/Training"
VALIDATION_PATH = "data/validation"

# Define categories
CATEGORIES = ["00-damage", "01-whole"]  # Update labels based on your dataset

# Function to load images
def load_images_from_folder(folder):
    images, labels = [], []
    for category in CATEGORIES:
        path = os.path.join(folder, category)
        label = CATEGORIES.index(category)  # Assign numeric label (0 or 1)

        if not os.path.exists(path):
            print(f"❌ Folder not found: {path}")
            continue

        for img in os.listdir(path):
            try:
                img_path = os.path.join(path, img)
                img_array = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
                img_resized = cv2.resize(img_array, (100, 100)).flatten()
                images.append(img_resized)
                labels.append(label)
            except Exception as e:
                print(f"⚠️ Error loading {img}: {e}")

    return np.array(images), np.array(labels)

# Load training and validation images
X_train, y_train = load_images_from_folder(TRAINING_PATH)
X_test, y_test = load_images_from_folder(VALIDATION_PATH)

# Check if images are loaded correctly
if len(X_train) == 0 or len(X_test) == 0:
    print("❌ No images found. Check dataset structure.")
    exit()

# Train KNN Model
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)

# Save the model
with open("car_damage_knn.pkl", "wb") as f:
    pickle.dump(knn, f)

print("✅ Model trained and saved successfully!")

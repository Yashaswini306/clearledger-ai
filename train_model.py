from sklearn.ensemble import IsolationForest
import numpy as np
import joblib
import os

# Sample training data
X = np.random.rand(1000, 3)

# Create model
model = IsolationForest(
    contamination=0.05,
    random_state=42
)

# Train model
model.fit(X)

# Create model folder
os.makedirs("model", exist_ok=True)

# Save model
joblib.dump(
    model,
    "model/fraud_model.pkl"
)

print("Fraud model trained")
from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(title="F1 Analytics ML Model API")

class DriverData(BaseModel):
    driver_name: str
    laps_completed: int
    current_tire_age: int

@app.get("/")
def read_root():
    return {"message": "F1 Analytics ML Backend is running."}

@app.post("/predict-tire-degradation")
def predict_tire_degradation(data: DriverData):
    # Dummy ML inference for tire degradation
    base_degradation = data.current_tire_age * 1.5
    predicted_wear = min(base_degradation + random.uniform(0.5, 2.5), 100.0)
    
    return {
        "driver": data.driver_name,
        "predicted_tire_wear_percent": round(predicted_wear, 2),
        "analysis": "Optimal pit window approaching in 3-5 laps." if predicted_wear > 75 else "Tires are in good condition."
    }

@app.get("/head-to-head-analysis")
def head_to_head_analysis(driver1: str, driver2: str):
    # Mock analysis comparing two drivers
    return {
        "matchup": f"{driver1} vs {driver2}",
        "advantage": driver1 if random.choice([True, False]) else driver2,
        "key_factor": random.choice(["Cornering Speed", "Tire Management", "Straight Line Top Speed"]),
        "confidence_score": round(random.uniform(0.70, 0.95), 2)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

from django.shortcuts import render
from django.http import JsonResponse
import joblib
import pandas as pd
import json

model = joblib.load("classifier.pkl")
encoder = joblib.load("encoder.pkl")

def prediction(request):
        data = json.loads(request.body)
        pr_data = pd.DataFrame({'x':data}).transpose()
        prediction = model.predict(pr_data).ravel()

        return  JsonResponse({'pred':encoder.inverse_transform(prediction).tolist()[0]})
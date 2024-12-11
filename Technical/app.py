from flask import Flask, render_template, request
import requests
from dotenv import load_dotenv
import os
import datetime as dt
from datetime import datetime 
from collections import defaultdict


app = Flask(__name__)


load_dotenv()
api_key = os.getenv('API_KEY')
BASE_URL = "http://api.openweathermap.org/data/2.5/"




ICON_MAPPING = {
    "clear sky": "clear",
    "few clouds": "cloudy",
    "scattered clouds": "cloudy",
    "broken clouds": "cloudy",
    "overcast clouds": "cloudy",
    "light rain": "rainy",
    "heavy intensity rain": "rainy",
    "shower rain": "rainy",
    "moderate rain": "rainy",
    "very heavy rain":"rainy",
    "extreme rain": "rainy",
    "rain": "rainy",
    "drizzle": "rainy",
    "light intensity drizzle": "rainy",
    "heavy intensity drizzle" : "rainy",
    "freezing rain":"snowflake",
    "thunderstorm": "thunder",
    "light thunderstorm": "thunder",
    "heavy thunderstorm": "thunder",
    "ragged thunderstorm": "thunder",
    "thunderstorm with light rain":"thunder",
    "thunderstorm with rain":"thunder",
    "thunderstorm with heavy rain":"thunder",
    "thunderstorm with drizzle":"thunder",
    "light snow": "snowflake",
    "heavy snow": "snowflake",
    "sleet": "snowflake",
    "snow": "snowflake",
    "rain and snow": "snowflake",
    "light rain and snow": "snowflake",
    "shower snow": "snowflake",
    "light shower snow": "snowflake",
    "heavy shower snow": "snowflake",
    "mist": "mist",
    "smoke": "mist",
    "fog": "mist",
    "dust": "mist",
    "sand/dust whirls": "mist",
    "tornado": "mist",
    "haze": "mist"
}

@app.route("/", methods=["GET", "POST"])
def weather():
    city = "Ismailia"  
    if request.method == "POST":
        city = request.form.get("city", "").strip()
       
    
    current_url = f"{BASE_URL}weather?q={city}&appid={api_key}&units=metric"
    current_resp = requests.get(current_url).json()
    
    
    
    if current_resp.get("cod") != 200:
        return render_template("index.html", error="City not found or API error.", current_weather=None, hourly_forecast=[])
    
    


    lat = current_resp["coord"]["lat"]
    lon = current_resp["coord"]["lon"]


    
    current_weather = {
        "city": current_resp["name"],
        "temp": current_resp["main"]["temp"],
        "description": current_resp["weather"][0]["description"].capitalize(),
        "icon": ICON_MAPPING.get(current_resp["weather"][0]["description"], "default.png"),
    }
    
    
    forecast_url = f"{BASE_URL}forecast?lat={lat}&lon={lon}&units=metric&appid={api_key}"
    forecast_resp = requests.get(forecast_url).json()
    
    
    hourly_forecast = []
    if forecast_resp.get("cod") == "200" and "list" in forecast_resp:
        for forecast in forecast_resp["list"][:12]:  
            hourly_forecast.append({
                "time": dt.datetime.fromtimestamp(forecast["dt"]).strftime("%I %p"),
                "temp": forecast["main"]["temp"],
                "description": forecast["weather"][0]["description"].capitalize(),
                "icon": ICON_MAPPING.get(forecast["weather"][0]["description"], "default.png"),
            })
    else:
        hourly_forecast = []  
    
    
    if forecast_resp.get("cod") == "200":
       daily_data = defaultdict(list)
       for forecast in forecast_resp["list"]:
           forecast_date = dt.datetime.fromtimestamp(forecast["dt"], tz=dt.timezone.utc).date()
           daily_data[forecast_date].append(forecast)

    
    sorted_dates = sorted(daily_data.keys())
    next_4_days = sorted_dates[:4]

    weekly_forecast = []
    for date in next_4_days:
        day_data = daily_data[date]
        temps = [item["main"]["temp"] for item in day_data]
        descriptions = [item["weather"][0]["description"] for item in day_data]
        most_common_description = max(set(descriptions), key=descriptions.count)
        
        weekly_forecast.append({
            "date": date.strftime("%A, %d %b"),  
            "avg_temp": round(sum(temps) / len(temps), 1),
            "description": most_common_description.capitalize(),
            "icon": ICON_MAPPING.get(max(set(descriptions), key=descriptions.count), "default.png"),
        })

   
    return render_template(
        "index.html",
        current_weather=current_weather,
        hourly_forecast=hourly_forecast,
        weekly_forecast=weekly_forecast,  )



@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
    return render_template("login.html")


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
    return render_template("signup.html")

if __name__ == "__main__":
    app.run(debug=True)

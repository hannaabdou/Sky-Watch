// Define weather conditions with corresponding background styles
const conditionBackgrounds = {
    "clear sky": "linear-gradient(to bottom, #f7d794, #ffaf7b)", // Warm gradient for sunny
    "few clouds": "linear-gradient(to bottom, #dfe6e9, #636e72)", 
    "scattered clouds":"linear-gradient(to bottom, #dfe6e9, #636e72)",
    "broken clouds":"linear-gradient(to bottom, #dfe6e9, #636e72)",
    "overcast clouds":"linear-gradient(to bottom, #dfe6e9, #636e72)",// Neutral gradient for cloudy
    "light rain": "linear-gradient(to bottom, #74b9ff, #0984e3)", 
    "shower rain":"linear-gradient(to bottom, #74b9ff, #0984e3)", 
    "moderate rain":"linear-gradient(to bottom, #74b9ff, #0984e3)", 
    "rain":"linear-gradient(to bottom, #74b9ff, #0984e3)", // Blue gradient for rainy
    "snow": "linear-gradient(to bottom, #dfe6e9, #b2bec3)", 
    "light snow":"linear-gradient(to bottom, #dfe6e9, #b2bec3)",// Light gray for snowy
    "thunderstorm": "linear-gradient(to bottom, #2d3436, #636e72)",
    "mist": "linear-gradient(to bottom, #2d3436, #636e72)",// Dark gradient for thunderstorm
    "haze":"linear-gradient(to bottom, #2d3436, #636e72)",
    "default": "linear-gradient(to bottom, #ffffff, #dfe6e9)" // Default background
};

// Function to update the background based on the weather condition
const updateBackground = (condition) => {
    const background = conditionBackgrounds[condition.toLowerCase()] || conditionBackgrounds.default;
    document.body.style.background = background;
};

// Function to render the weather data and update the background
const renderWeather = (data) => {
    console.log("Condition:", data.condition.toLowerCase());

    updateBackground(data.condition.toLowerCase());

    // Render other weather data
    const weatherContainer = document.querySelector('.weather-container');
    weatherContainer.innerHTML = `
        <h3>📍 ${data.city}</h3>
        <h1 class="temperature">${data.temperature}°C</h1>
        <p>${data.condition}</p>
        <p>${data.date}</p>
    `;
};

// Fetch weather data from an API (replace with actual API call)
fetch(`/weather-data`)
    .then(response => response.json())
    .then(data => {
        // Example API response mapping
        const weatherData = {
            city: data.city,
            temperature: data.temp,
            condition: data.description,
            date: new Date().toLocaleDateString() // Current date
        };

        // Render weather data and change background
        renderWeather(weatherData);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        // Fallback weather data if API fails
        renderWeather({
            city: "Ismailia, Egypt",
            temperature: 26,
            condition: "clear sky",
            date: "Monday, December 2"
        });
    });
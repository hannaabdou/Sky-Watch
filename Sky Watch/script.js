// Define weather conditions with corresponding background styles
const conditionBackgrounds = {
    Sunny: "linear-gradient(to bottom, #f7d794, #ffaf7b)", // Warm gradient for sunny
    Cloudy: "linear-gradient(to bottom, #dfe6e9, #636e72)", // Neutral gradient for cloudy
    Rainy: "linear-gradient(to bottom, #74b9ff, #0984e3)", // Blue gradient for rainy
    Snowy: "linear-gradient(to bottom, #dfe6e9, #b2bec3)", // Light gray for snowy
    Thunderstorm: "linear-gradient(to bottom, #2d3436, #636e72)", // Dark gradient for thunderstorm
    Default: "linear-gradient(to bottom, #ffffff, #dfe6e9)" // Default background
};

// Function to update the background based on the weather condition
const updateBackground = (condition) => {
    const background = conditionBackgrounds[condition] || conditionBackgrounds.Default;
    document.body.style.background = background;
};

// Function to render the weather data and update the background
const renderWeather = (data) => {
    // Update the background based on the current weather condition
    updateBackground(data.condition);

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
fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Ismailia`)
    .then(response => response.json())
    .then(data => {
        // Example API response mapping
        const weatherData = {
            city: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text, // Example: "Sunny", "Cloudy"
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
            condition: "Sunny",
            date: "Monday, December 2"
        });
    });
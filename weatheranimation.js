document.addEventListener('DOMContentLoaded', function() {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.classList.add('weather');
  document.body.appendChild(weatherContainer);

  const searchInput = document.getElementById('search');  // Reference to the search input field
  const searchButton = document.querySelector('.search-btn');  // Reference to the search button
  

  async function fetchWeather(city) {
      try {
          const apiKey = "7becb6386ff67cf1f171b0451c449c7d";
          const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
          const response = await fetch(`${BASE_URL}weather?q=${city}&appid=${apiKey}&units=metric`);
          const data = await response.json();

          if (data.cod === 200) {
              const weatherDescription = data.weather[0].description.toLowerCase();
              generateWeather(weatherDescription, data.main.temp);
          } else {
              console.log('City not found or API error.');
              alert('City not found. Please try again.');
          }
      } catch (error) {
          console.error('Error fetching weather data:', error);
      }
  }

  function createRaindrop() {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = Math.random() * window.innerWidth + 'px';
      raindrop.style.animationDuration = Math.random() * 1.5 + 1.5 + 's';
      weatherContainer.appendChild(raindrop);

      raindrop.addEventListener('animationend', () => {
          raindrop.remove();
      });
  }

  function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 3 + 's';
      weatherContainer.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
          snowflake.remove();
      });
  }

  function generateWeather(condition, temp) {
      weatherContainer.innerHTML = ''; // clear previous weather

      const tempElement = document.createElement('h1');
      tempElement.classList.add('temperature');
      tempElement.innerHTML = `${temp}°C`;
      weatherContainer.appendChild(tempElement);

      switch (condition) {
          case "light rain":
              for (let i = 0; i < 75; i++) createRaindrop();
              break;
          case "heavy intensity rain":
              for (let i = 0; i < 150; i++) createRaindrop();
              break;
          case "shower rain":
              for (let i = 0; i < 100; i++) createRaindrop();
              break;
          case "moderate rain":
              for (let i = 0; i < 200; i++) createRaindrop();
              break;
          case "very heavy rain":
              for (let i = 0; i < 500; i++) createRaindrop();
              break;
          case "extreme rain":
              for (let i = 0; i < 1000; i++) createRaindrop();
              break;
          case "rain":
              for (let i = 0; i < 125; i++) createRaindrop();
              break;
          case "drizzle":
              for (let i = 0; i < 30; i++) createRaindrop();
              break;
          case "freezing rain":
              for (let i = 0; i < 500; i++) createRaindrop();
              for (let i = 0; i < 250; i++) createSnowflake();
              break;
          case "light snow":
              for (let i = 0; i < 100; i++) createSnowflake();
              break;
          case "heavy snow":
              for (let i = 0; i < 500; i++) createSnowflake();
              break;
          case "sleet":
              for (let i = 0; i < 200; i++) createRaindrop();
              for (let i = 0; i < 400; i++) createSnowflake();
              break;
          case "snow":
              for (let i = 0; i < 100; i++) createSnowflake();
              break;
          case "rain and snow":
              for (let i = 0; i < 250; i++) createRaindrop();
              for (let i = 0; i < 250; i++) createSnowflake();
              break;
          case "light rain and snow":
              for (let i = 0; i < 150; i++) createRaindrop();
              for (let i = 0; i < 150; i++) createSnowflake();
              break;
          case "shower snow":
              for (let i = 0; i < 300; i++) createSnowflake();
              break;
          case "light shower snow":
              for (let i = 0; i < 200; i++) createSnowflake();
              break;
          case "heavy shower snow":
              for (let i = 0; i < 500; i++) createSnowflake();
              break;
          default:
              console.log("No animation available for this condition.");
              break;
      }
  }
});

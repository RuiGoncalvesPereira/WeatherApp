// Created by: Rui Pereira

const APIKey = '9c9d3adc52c7423cbc9185001241409';
const WeatherSearch = document.getElementById('WeatherSearch');
const City = document.getElementById('city');
const Temperature = document.getElementById('temperature');
const WeatherIcon = document.getElementById('weatherIcon');
const TempInfo = document.getElementById('tempinfo');
const DateDisplay = document.getElementById('dateDisplay');
const Condition = document.getElementById('condition');

WeatherSearch.addEventListener('submit', function (event) {
  event.preventDefault();

  const city = document.getElementById('citysearch').value.trim();
  const apiURL = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${encodeURIComponent(city)}&days=6`; // Request 5 days forecast (0 is Today)

  // Fetch API-Data
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found'); // Throw error if no city found
      }
      return response.json(); // Convert response to JSON format
    })
    .then(data => {
      console.log(data); // Log to check structure

      // Weather Information
      const cityname = data.location.name;
      const country = data.location.country;
      const region = data.location.region || 'N/A';
      const icon = data.current.condition.icon; // Weather Icon
      const temp = Math.round(data.current.temp_c);
      const feelTemp = Math.round(data.current.feelslike_c);
      const condition = data.current.condition.text;
      const humidity = data.current.humidity;
      const uv = data.current.uv;

      let uvRating;

      if (uv < 3) {
        uvRating = 'Low';
      } else if (uv < 7) {
        uvRating = 'Moderate';
      } else if (uv < 10) {
        uvRating = 'High';
      } else if (uv >= 11) {
        uvRating = 'Extreme';
      } else {
        uvRating = 'N/A';
      }

      // Access forecast data for today
      const forecastDay = data.forecast.forecastday[0].day;
      const minTemp = Math.round(forecastDay.mintemp_c);
      const maxTemp = Math.round(forecastDay.maxtemp_c);

      // Display information in HTML
      City.innerText = `${cityname}, ${region}, ${country}`;
      Temperature.innerText = `${temp}°C`;
      Condition.innerText = `${condition} | ${humidity}% Humidity | UV-Index: ${uvRating}`;

      TempInfo.innerText = `Min: ${minTemp}°C / Max: ${maxTemp}°C - Feels like ${feelTemp}°C`;

      // Check if WeatherIcon is null
      if (WeatherIcon) {
        WeatherIcon.src = `https:${icon}`;
      } else {
        console.error("WeatherIcon element not found.");
      }

      // Forecast Section
      const forecastContainer = document.getElementById('forecast-container');
      forecastContainer.innerHTML = ''; // Clear previous forecast if any

      // Loop through 5-day forecast
      for (let i = 1; i < 6; i++) {
        const day = data.forecast.forecastday[i];
        const date = new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' });
        const maxTemp = Math.round(day.day.maxtemp_c);
        const minTemp = Math.round(day.day.mintemp_c);
        const icon = day.day.condition.icon;

        // Create forecast HTML elements
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.classList.add('forecast-day');

        const dayName = document.createElement('h4');
        dayName.innerText = date;
        forecastDayDiv.appendChild(dayName);

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `https:${icon}`;
        forecastDayDiv.appendChild(weatherIcon);

        const temps = document.createElement('p');
        temps.innerText = `${maxTemp}°C / ${minTemp}°C`;
        forecastDayDiv.appendChild(temps);

        // Append the div with elements to the container
        forecastContainer.appendChild(forecastDayDiv);
      }
    })
    .catch(error => {
      Temperature.innerText = `Error: ${error.message}`; // Display error
    });
});

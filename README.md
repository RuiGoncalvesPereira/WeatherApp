# Weather App

## Project Description

I created this weather app as part of my journey to improve my skills in JavaScript, particularly by working with APIs and dynamically generated content. This app retrieves real-time weather data using [WeatherAPI](https://www.weatherapi.com), allowing users to search for any city and receive up-to-date information about the current weather, including temperature, humidity, UV index, and a 5-day forecast.

The experience of building this app helped me learn how to integrate an API for the first time. By working with asynchronous JavaScript (using `fetch`), I learned how to request data from an external service and display it within a web application. Additionally, I gained hands-on experience handling API responses and errors, making the app more user-friendly.

## How to Use

To use the app, follow these steps:

1. **Get an API key**: Start by signing up on [WeatherAPI.com](https://www.weatherapi.com) to obtain your free API key. WeatherAPI offers a generous free tier, allowing millions of requests, which is perfect for development and testing purposes.

2. **Set up the API key**: Once you have the API key, you need to insert it into the code. Open the `index.js` file and replace the placeholder API key with your own:
   ```javascript
   const APIKey = 'yourapikey';
   ```

3. **Run the app**: After setting up the API key, simply open the `index.html` file in your browser. You can search for any city, and the app will fetch and display the weather data for that location.

## Features

- **Real-time weather data**: Enter a city in the search box, and the app will show the current weather for that location.
- **Weather details**: Displays detailed weather information such as temperature, humidity, UV index, and a description of the current weather (e.g., "Clear", "Cloudy").
- **5-day forecast**: The app also provides a forecast for the next five days, showing the expected high and low temperatures as well as weather conditions.
- **UV Index Rating**: Based on the UV index, the app dynamically rates the UV exposure as "Low", "Moderate", "High", or "Extreme", giving users a clear understanding of the sun exposure risk.

## Challenges and Learning

Working on this project was an exciting challenge, especially since it was my first time integrating an API into a web application. Initially, I faced difficulties in handling errors, such as dealing with invalid city names or incorrect API keys.

Another key learning experience was dynamically generating content. I had to figure out how to display weather data for each day of the 5-day forecast, which involved dynamically creating and updating HTML elements through JavaScript. 

## App Screenshots

### Initial Screen

When you first open the app, this is how it looks:

![image](https://github.com/user-attachments/assets/256287ce-c2fe-48fa-b196-9af0818aa886)

### After Searching for a City

Once you search for a city, the weather details and forecast will appear (Don't forget to add the API-Key!):

![image](https://github.com/user-attachments/assets/8773173c-d64e-40f2-838d-37287d251b22)

## Future Improvements

- **Geolocation feature**: An improvement I plan to implement is a geolocation feature that would automatically display the weather for the user's current location.

## Credits

This project was made possible by the data provided by **WeatherAPI**. The experience of building this app has been a rewarding learning process, and I'm excited to continue enhancing it in the future.

Created by **Rui Pereira**.

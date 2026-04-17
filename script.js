'use strict';

const apiKey = 'a828b3997762a74a29e58fdf871f8010';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Weather in ${city}: ${data.weather[0].description}`);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Example Usage
getWeather('London');
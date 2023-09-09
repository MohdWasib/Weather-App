const apiKey = '24532c8e5ff93e1c3c74ed6feece0337'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('searchButton');
const locationInput = document.getElementById('locationInput');
const locationName = document.getElementById('location');
const temperature = document.getElementById('temperature');
const conditions = document.getElementById('conditions');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                locationName.textContent = data.name;
                temperature.textContent = data.main.temp;
                conditions.textContent = data.weather[0].description;
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
                locationName.textContent = 'Location not found';
                temperature.textContent = '';
                conditions.textContent = '';
            });
    }
});

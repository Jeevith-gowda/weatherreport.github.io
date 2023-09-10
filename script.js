document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("location");
    const getWeatherButton = document.getElementById("getWeather");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherButton.addEventListener("click", function () {
        const location = locationInput.value.trim();
        if (location !== "") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`)
                .then(response => response.json())
                .then(data => {
                    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
                    const description = data.weather[0].description;
                    weatherInfo.innerHTML = `
                        <p>Temperature: ${temperature}°C</p>
                        <p>Description: ${description}</p>
                    `;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    weatherInfo.innerHTML = "Unable to fetch weather data.";
                });
        }
    });
});

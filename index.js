const apiKey = "DU4JDU7KTLLSVK3WA5F7TB9LW";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

async function getWeather(city){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${apiKey}&contentType=json`);
        const data = await response.json();
        console.log(data);
        
        document.getElementById("city").innerHTML = data.resolvedAddress;
        document.getElementById("temperature").innerHTML = Math.round(data.currentConditions.temp)+" C";
        document.getElementById("description").innerHTML = data.currentConditions.conditions;
        document.getElementById("humidity").innerHTML = data.currentConditions.humidity + "%";
        document.getElementById("date").innerHTML = data.currentConditions.datetime;
        document.getElementById("icon").innerHTML = getWeatherIcon(data.currentConditions.icon);

        document.querySelector(".weather-info").style.display = "block";

    } catch (error) {
        console.log(error);
    }
}

function getWeatherIcon(icon){
    switch(icon){
        case "clear-day":
            return "☀️";
        case "clear-night":
            return "🌙";
        case "partly-cloudy-day":
            return "⛅";
        case "partly-cloudy-night":
            return "🌙☁️";
        case "cloudy":
            return "☁️";
        case "fog":
            return "🌫️";
        case "wind":
            return "💨";
        case "rain":
            return "🌧️";
        case "showers-day":
            return "🌦️";
        case "showers-night":
            return "🌧️";
        case "snow":
            return "❄️";
        case "thunderstorm":
            return "⛈️";
        case "hail":
            return "🌨️";
        default:
            return "❓";
    }
}

searchBtn.addEventListener("click",()=>{
    getWeather(searchInput.value);
});



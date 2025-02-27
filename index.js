async function locationInfo(){
    const city = document.getElementById("cityInput").value;
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/athens?unitGroup=us&key=DU4JDU7KTLLSVK3WA5F7TB9LW&contentType=json")
        const data = await response.json();
        if(!data || !data.currentConditions){
            alert("Unable to find location");
            return;
        }
        if(!city){
            alert("Please enter a city name");
            return;
        }
        
        const location = document.getElementById("location");
        location.textContent = data.resolvedAddress;
        const temperature = document.getElementById("temperature");
        temperature.textContent = data.currentConditions.temp;
        const description = document.getElementById("description");
        description.textContent = data.currentConditions.conditions;

        document.getElementById("weatherInfo").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather. Try again later");
    }  
    
}

const button = document.getElementById("submitBtn");
button.addEventListener("click", locationInfo);
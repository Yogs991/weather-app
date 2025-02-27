let test = document.querySelector(".test");
async function locationInfo(){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/athens?unitGroup=us&key=DU4JDU7KTLLSVK3WA5F7TB9LW&contentType=json")
    const cityData = await response.json();
    test.textContent = cityData.latitude;
}

locationInfo();
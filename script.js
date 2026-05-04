const apiKey = "432994bee271d6072c39b9140d5d9fba";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityBox= document.querySelector(".search-box input");
const searchBtn= document.querySelector(".search-box button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city) {

    try{
const response = await fetch(URL + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display="none";
    }

    let data = await response.json();
   

    
    const location = document.querySelector(".location");
    const temp = document.querySelector(".temperature");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "./weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "./weather-app-img/images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "./weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "./weather-app-img/images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "./weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src= "./weather-app-img/images/haze.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src= "./weather-app-img/images/snow.png"
    }

    document.querySelector(".weather").style.display="block"


    location.textContent = data.name;
    temp.textContent = Math.round(data.main.temp) + " °C";
    humidity.textContent = data.main.humidity + "% ";
    wind.textContent = data.wind.speed + " kmph";

    }
    catch(error){
    console.error("Error:", error.message);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    }
    
}

searchBtn.addEventListener("click",()=>{
checkWeather(cityBox.value);
})
cityBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && cityBox.value.trim()) {
        checkWeather(cityBox.value.trim());
    }
});
     




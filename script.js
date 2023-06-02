let apiKey = "4f8ae2347e767f703527c7565ebb4541";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".choose-weather-address input");
let searchBtn = document.querySelector(".choose-weather-address button");

let weatherIcon = document.getElementById("weather-icon");
let backgroundImage = document.getElementById("background-img");
let bodyBackground = document.body;
let weatherArticle = document.querySelector(".weather");
let city = "Lund";
let weatherData = [];
let lund = document.getElementById("lund");
let stockholm = document.getElementById("stockholm");
let västervik = document.getElementById("västervik");

getWeather();

function getWeather () {
    
    fetch (apiUrl + city + `&appid=${apiKey}`) 
        .then ((res) => res.json())
        .then ((value) => {
        weatherData = value;
        drawWeather(weatherData)
        document.getElementById("error").style.display = "none";
        })
    
        .catch(function(err) {
            console.log("error");
            document.getElementById("error").style.display = "block";
        })
        
}

function drawWeather(weatherData) {
    document.getElementById("city").innerHTML = weatherData.name;
    document.getElementById("temp").innerHTML = Math.round(weatherData.main.temp) + "°C";
    document.getElementById("fuktighet").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("lufttryck").innerHTML = weatherData.main.pressure;
    document.getElementById("vind").innerHTML = weatherData.wind.speed + "m/s";
    document.getElementById("description").innerHTML = weatherData.weather[0].main;

    if (weatherData.weather[0].main === "Clouds"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/clouds.webp)";
        weatherIcon.src = "weather-app-img/images/clouds.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #242627, #ebf8e1, #f69d3c)";
    }
    else if (weatherData.weather[0].main === "Clear"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/balloons.webp)";
        weatherIcon.src = "weather-app-img/images/clear.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)";
    }
    else if (weatherData.weather[0].main === "Rain"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/raining.jpeg)";
        weatherIcon.src = "weather-app-img/images/rain.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #242627, #ebf8e1, #f69d3c)";
    }
    else if (weatherData.weather[0].main === "Drizzle"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/raining.jpeg)";
        weatherIcon.src = "weather-app-img/images/drizzle.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #242627, #ebf8e1, #f69d3c)";
    }
    else if (weatherData.weather[0].main === "Mist"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/clouds-twilight-times.jpg)";
        weatherIcon.src = "weather-app-img/images/mist.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)";
    }
    else if (weatherData.weather[0].main === "Snow"){
        backgroundImage.style.backgroundImage="url(weather-app-img/images/clouds-twilight-times.jpg)";
        weatherIcon.src = "weather-app-img/images/snow.png";
        bodyBackground.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)";
    }
}

//söka efter ny stad
searchBtn.addEventListener("click", () => {
    city = searchBox.value;
    getWeather();
})

// favoritstäder snabbval

lund.addEventListener("click", () => {
    city = "Lund";
    getWeather();
})

stockholm.addEventListener("click", () => {
    city = "Stockholm";
    getWeather();
})

västervik.addEventListener("click", () => {
    city = "Västervik";
    getWeather();
})

// hämta tid och datum

let dateAndTime = document.getElementById("date-time");

setInterval(() => {
   let date  = new Date();
    dateAndTime.innerHTML = date.toString().substring(0,24);
},1000)
let apiKey = "4f8ae2347e767f703527c7565ebb4541";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".choose-weather-address input");
let searchBtn = document.querySelector(".choose-weather-address button");

let weatherArticle = document.querySelector(".weather");
let city = "Lund";
let weatherData = [];
let lund = document.getElementById("lund");
let stockholm = document.getElementById("stockholm");
let västervik = document.getElementById("västervik");

function getWeather () {
    
    fetch (apiUrl + city + `&appid=${apiKey}`) 
        .then ((res) => res.json())
        .then ((value => {
        console.log(value);

        // weatherData.push(value);
        // console.log(weatherData);

        weatherData = value;
        console.log(weatherData);
        drawWeather(weatherData)
        
        }))
}

function drawWeather(weatherData) {
    document.getElementById("city").innerHTML = weatherData.name;
    document.getElementById("temp").innerHTML = weatherData.main.temp + "°C";
    document.getElementById("fuktighet").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("lufttryck").innerHTML = weatherData.main.pressure + "hPa";
    document.getElementById("vind").innerHTML = weatherData.wind.speed + "m/s";
    document.getElementById("description").innerHTML = weatherData.weather[0].main;

    if (weatherData.weather[0].main === "Clouds"){
        document.getElementById("background-img").style.backgroundImage="url(weather-app-img/images/clouds.webp)";
    }
    else if (weatherData.weather[0].main === "Clear"){
        document.getElementById("background-img").style.backgroundImage="url(weather-app-img/images/balloons.webp)";
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
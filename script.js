let apiKey = "4f8ae2347e767f703527c7565ebb4541";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london";
let weatherArticle = document.querySelector(".weather");
function getWeather () {
    fetch (apiUrl + `&appid=${apiKey}`) 
        .then ((res) => res.json())
        .then ((value => {
        console.log(value);
        
        let weather = document.createElement("h1");
        weather.innerText = value.weather[0].main + " " + value.weather[0].description;
        let city = document.createElement("p");
        city.innerText = value.name;
        let temprature = document.createElement("p");
        temprature.innerText = value.main.temp + "°C";
        let lufttryck = document.createElement("p");
        lufttryck.innerText = value.main.pressure;
        let humidity = document.createElement("p");
        humidity.innerText = value.main.humidity;
        let wind = document.createElement("p");
        wind.innerText = value.wind.speed + "m/s";

        weatherArticle.append(weather, city, temprature, lufttryck, humidity, wind);
        
        }))
}
getWeather();
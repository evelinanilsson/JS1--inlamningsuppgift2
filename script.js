let apiKey = "4f8ae2347e767f703527c7565ebb4541";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=lund";
let weatherArticle = document.querySelector(".weather");
function getWeather () {
    fetch (apiUrl + `&appid=${apiKey}`) 
        .then ((res) => res.json())
        .then ((value => {
        console.log(value);
        
        let weather = document.createElement("h1");
        weather.innerText = value.weather[0].description.charAt(0).toUpperCase() + value.weather[0].description.slice(1);
        let city = document.createElement("p");
        city.innerText = value.name;
        let temprature = document.createElement("p");
        temprature.innerText = value.main.temp + "°C";
        let lufttryck = document.createElement("p");
        lufttryck.innerText = "Lufttryck: " + value.main.pressure + " hPa";
        let humidity = document.createElement("p");
        humidity.innerText = "Luftfuktighet: " + value.main.humidity + "%";
        let wind = document.createElement("p");
        wind.innerText = value.wind.speed + "m/s";

        weatherArticle.append(weather, city, temprature, lufttryck, humidity, wind);
        
        }))
}
getWeather();

// hämta tid och datum

let dateAndTime = document.getElementById("date-time");

setInterval(() => {
   let date  = new Date();
    dateAndTime.innerHTML = date.toString().substring(0,24);
},1000)
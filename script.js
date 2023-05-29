let apiKey = "4f8ae2347e767f703527c7565ebb4541";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london";

function getWeather () {
    fetch (apiUrl + `&appid=${apiKey}`) 
        .then ((res) => res.json())
        .then ((value => {
        console.log(value);
        }))
    
   
}
getWeather();
'use strict';

const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiID = "API-KEY";
const error = document.querySelector(".error");
const correct = document.querySelector(".no-error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiID}`);
    if (response.status == 200) {
        var data = await response.json();
        let weather = data.weather[0].main;

        document.querySelector('#temp').innerHTML = data.main.temp + `°C`;
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#humidity').innerHTML = data.main.humidity + `%`;
        document.querySelector('#wind').innerHTML = data.wind.speed + ` Km/hr`;

        if (weather == 'Haze') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-cloud-haze"></i>';
        } else if (weather == 'Clouds') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-cloud"></i>';
        } else if (weather == 'Rain') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-cloud-lightning-rain"></i>';
        } else if (weather == 'Clear') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-brightness-high"></i>';
        } else if (weather == 'Drizzle') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-cloud-drizzle"></i>';
        } else if (weather == 'Mist') {
            document.querySelector('#weather').innerHTML = '<i class=" fs-1 bi bi-cloud-fog2"></i>';
        }

        error.style.display = "none";
        correct.style.display = "block";
    } else {
        error.style.display = "block";
        correct.style.display = "none";
    }


}
searchBtn?.addEventListener("click", () => {
    checkWeather(search.value);
})
import { key } from "src/.env";

const addKey = function() {
    console.log("you requested your key");
    return key;
}

const feelsLike = document.querySelector('#feelsLike');
const actual = document.querySelector('#actual');
const conditions = document.querySelector('#conditions');
const zip = document.querySelector('#zip');
const form = document.querySelector('#zipCodeForm');
const messEl = document.querySelector('#message');

async function getWeather(event) { 
        event.preventDefault();
        const zipCode = `${this[0].value}`;
        const appId = addKey();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`
        const response = await fetch(`${url}`, {mode: 'cors'});
        const weatherData = await response.json();
        try {
            messEl.textContent="";
            feelsLike.textContent=`${weatherData.main.feels_like}`;
            actual.textContent=`${weatherData.main.temp}`;
            conditions.textContent=`${weatherData.weather[0].description}`
            console.log(weatherData);
        } catch {
            messEl.textContent="Oops, something went wrong. Try another zip code!";
        }
    };

form.addEventListener("submit", getWeather);
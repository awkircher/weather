import { prefetch } from "webpack";
import data from "./database.json";

const feelsLike = document.querySelector('#feelsLike');
const unitSymbol = document.querySelector('#feelsDeg');
const actual = document.querySelector('#actual');
const description = document.querySelector('#description');
const form = document.querySelector('#zipCodeForm');
const messEl = document.querySelector('#message');
const zipEl = document.querySelector('#zip');
const updateButton = document.querySelector('#change'); //change zip code button
const switchButton = document.querySelector('#switch'); //switch units button
const switchText = document.querySelector('#units'); //text on the switch button
const currentZip = document.querySelector('#current');

const Zip = function() {
    const set = function(zip) {
        localStorage.setItem("zip", zip);
    };
    const get = function() {
        let zip = localStorage.getItem("zip");
        if (!zip) {
            zip = "10001";
        }
        return zip;
    };
    return { set, get }
}();

const Data = function() {
    const set = function(weatherData) {
        localStorage.setItem("weather", JSON.stringify(weatherData)); //immediately store response in localStorage
    };
    const convert = function(temp, units) {
        console.log('you called convert');
        temp = Number(temp);
        if (units === 'C') {
            temp = temp - 273.15; //K to C
        } else {
            temp = (((temp - 273.15) * 9)/5) + 32; //K to F
        };
        return temp;
    };
    const setUnitPref = function(preference) {
        localStorage.setItem("unit", preference);
    };
    const getUnitPref = function() {
        console.log("you called getUnitPref");
        let preference = localStorage.getItem("unit");
        if (!preference) {
            setUnitPref('F');
        }
        return preference;
    };
    const get = function() {
        const retrievedData = JSON.parse(localStorage.getItem('weather'));
        let feels = retrievedData.main.feels_like;
        let actual = retrievedData.main.temp;
        const conditions = retrievedData.weather[0].main;
        const imageId = retrievedData.weather[0].id;
        const units = getUnitPref(); //returns user preference, or sets to and returns F if nothing stored
        feels = convert(feels, units);
        actual = convert(actual, units);
        return {feels, actual, conditions, imageId, units};
    };
    return { get, set, getUnitPref, setUnitPref }
}();

const View = function() {
    const showHide = function() {
        form.classList.toggle('hidden');
        currentZip.classList.toggle('hidden');
    }
    const setImage = function(code) {
        code = code.toString();
        const img = document.querySelector("#icon");
        let src;
        switch(true) {
            case code.startsWith('2'):
                src = data['2'].src;
                break;
            case code.startsWith('3'):
                src = data['3'].src;
                break;
            case code.startsWith('5'):
                src = data['5'].src;
                break;
            case code.startsWith('6'):
                src = data['6'].src;
                break;
            case code.startsWith('7'):
                src = data['7'].src;
                break;
            case code === '800':
                const time = new Date().getHours();
                if (time < 6 || time > 18) {
                    src = data['800'].src_night;
                } else {
                    src = data['800'].src_day;
                }
                break;
            case code.startsWith('8'):
                src = data['8'].src;
                break;
            }
        img.setAttribute("src", `${src}`);
    }
    const update = function(data, zip) {
        let weather;
        if (data) { //if response was 200, get the converted temps in user preferred units and image code
            weather = Data.get();
        }
        feelsLike.textContent = data ? `${Math.round(weather.feels)}` : feelsLike.textContent="~";
        actual.textContent = data ? `${Math.round(weather.actual)}` : actual.textContent="~";
        description.textContent = data ? `${weather.conditions}` : description.textContent="Unable to show conditions";
        zipEl.textContent = zip;
        switchText.textContent = (weather.units === 'C') ? "Fahrenheit" : "Celsius"; //button shows opposite of what's in localStorage
        unitSymbol.textContent = (weather.units === 'C') ? "C" : "F"; //display matches what's in localStorage
        setImage(weather.imageId);
    }
    const setBackground = function(timeOfDay) {
        const body = document.body;
        switch(true) {
            case timeOfDay >= 0 && timeOfDay < 2:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("darkestNight");
                break;
            case timeOfDay >= 2 && timeOfDay < 4:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("dustyPurple");
                break;
            case timeOfDay >= 4 && timeOfDay < 6:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("transitionPeach");
                break;
            case timeOfDay >= 6 && timeOfDay < 8:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("dawn");
                break;
            case timeOfDay >= 8 && timeOfDay < 10:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("morningYellow");
                break;
            case timeOfDay >= 10 && timeOfDay < 12:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("blueWhite");
                break;
            case timeOfDay >= 12 && timeOfDay < 14:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("noonBlue");
                break;
            case timeOfDay >= 14 && timeOfDay < 16:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("transitionPeach");
                break;
            case timeOfDay >= 16 && timeOfDay < 18:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("goldenHour");
                break;
            case timeOfDay >= 18 && timeOfDay < 20:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("lightPurple");
                break;
            case timeOfDay >= 20 && timeOfDay < 22:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("middlePurple");
                break;
            case timeOfDay >= 22 && timeOfDay < 24:
                console.log(timeOfDay);
                body.classList="";
                body.classList.add("dustyPurple");
                break;
        }
    }
    return { setBackground, update, showHide };
}();

const Weather = function() {
    const get = async function(event) { 
        let zipCode;
        if (event != null) { //means this call is happening because a new zip code was entered
            zipCode = event.target[0].value;
            Zip.set(zipCode);
        } else { //means this call is happening because the page was loaded
            zipCode = Zip.get();
        }
        const appId = process.env.KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${appId}`
        let response;
        let weatherData;
        try {
            response = await fetch(`${url}`, {mode: 'cors'});
            weatherData = await response.json();
            if (weatherData.cod == '200') {
                messEl.textContent="";
                Data.set(weatherData);
                View.update(true, zipCode); //View should update with localStorage data
            }
            else throw weatherData.message;
        } catch(error) {
            messEl.textContent=`${error}`;
            View.update(null, zipCode); //call was bad, View should update with error messages
        }
    };
    return { get };
}();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    View.showHide();
    Weather.get(event);
});
updateButton.addEventListener("click", View.showHide);
switchButton.addEventListener("click", function() {
    const current = Data.getUnitPref();
    (current === 'C') ? Data.setUnitPref('F') : Data.setUnitPref('C');
    View.update(true, Zip.get());
});

View.setBackground(new Date().getHours());
Weather.get(null);
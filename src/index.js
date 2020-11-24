const feelsLike = document.querySelector('#feelsLike');
const actual = document.querySelector('#actual');
const conditions = document.querySelector('#conditions');
const zip = document.querySelector('#zip');
const form = document.querySelector('#zipCodeForm');
const messEl = document.querySelector('#message');

async function getWeather(event) { 
    event.preventDefault();
    const zipCode = `${this[0].value}`;
    const appId = process.env.KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`
    const response = await fetch(`${url}`, {mode: 'cors'});
    const weatherData = await response.json();
    try {
        messEl.textContent="";
        feelsLike.textContent=`${weatherData.main.feels_like}`;
        actual.textContent=`${weatherData.main.temp}`;
        conditions.textContent=`${weatherData.weather[0].description}`
    } catch {
        messEl.textContent="Oops, something went wrong. Try another zip code!";
    }
};

function setBackground(timeOfDay) {
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

form.addEventListener("submit", getWeather);
setBackground(new Date().getHours());
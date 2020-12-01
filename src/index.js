import data from "./database.json";

const feelsLike = document.querySelector('#feelsLike');
const actual = document.querySelector('#actual');
const description = document.querySelector('#description');
const form = document.querySelector('#zipCodeForm');
const messEl = document.querySelector('#message');
const zipEl = document.querySelector('#zip');
const updateButton = document.querySelector('#change');
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
        messEl.textContent="";
        data.main.feels_like ? feelsLike.textContent=`${Math.round(data.main.feels_like)}`:feelsLike.textContent="Unavailable";
        data.main.temp ? actual.textContent=`${Math.round(data.main.temp)}`:actual.textContent="Unavailable";
        data.weather[0].description ? description.textContent=`${data.weather[0].main}`:description.textContent="Unavailable";
        zipEl.textContent=zip;
        setImage(data.weather[0].id);
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
        if (event != null) {
            zipCode = event.target[0].value;
            Zip.set(zipCode);
        } else { 
            zipCode = Zip.get();
        }
        const appId = process.env.KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`
        let response;
        let weatherData;
        try {
            response = await fetch(`${url}`, {mode: 'cors'});
            weatherData = await response.json();
        } catch(error) {
            console.error(error);
            messEl.textContent=`${error}`;
        }
        View.update(weatherData, zipCode);
    };
    return { get };
}();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    View.showHide();
    Weather.get(event);
});

updateButton.addEventListener("click", View.showHide);

View.setBackground(new Date().getHours());
Weather.get(null);
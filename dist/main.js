/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("//import { key } from \"src/.env\";\nconst key = '4a4a6a0dfafe6724a79ce0229fceaa76';\n\nconst addKey = function() {\n    console.log(\"you requested your key\");\n    return key;\n}\n\nconst feelsLike = document.querySelector('#feelsLike');\nconst actual = document.querySelector('#actual');\nconst conditions = document.querySelector('#conditions');\nconst zip = document.querySelector('#zip');\nconst form = document.querySelector('#zipCodeForm');\nconst messEl = document.querySelector('#message');\n\nasync function getWeather(event) { \n        event.preventDefault();\n        const zipCode = `${this[0].value}`;\n        const appId = addKey();\n        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`\n        const response = await fetch(`${url}`, {mode: 'cors'});\n        const weatherData = await response.json();\n        try {\n            messEl.textContent=\"\";\n            feelsLike.textContent=`${weatherData.main.feels_like}`;\n            actual.textContent=`${weatherData.main.temp}`;\n            conditions.textContent=`${weatherData.weather[0].description}`\n            console.log(weatherData);\n        } catch {\n            messEl.textContent=\"Oops, something went wrong. Try another zip code!\";\n        }\n    };\n\nform.addEventListener(\"submit\", getWeather);\n\n//# sourceURL=webpack://weather/./src/index.js?");
/******/ })()
;
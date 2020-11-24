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
eval("const feelsLike = document.querySelector('#feelsLike');\nconst actual = document.querySelector('#actual');\nconst conditions = document.querySelector('#conditions');\nconst zip = document.querySelector('#zip');\nconst form = document.querySelector('#zipCodeForm');\nconst messEl = document.querySelector('#message');\n\nasync function getWeather(event) { \n    event.preventDefault();\n    const zipCode = `${this[0].value}`;\n    const appId = \"4a4a6a0dfafe6724a79ce0229fceaa76\";\n    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`\n    const response = await fetch(`${url}`, {mode: 'cors'});\n    const weatherData = await response.json();\n    try {\n        messEl.textContent=\"\";\n        feelsLike.textContent=`${weatherData.main.feels_like}`;\n        actual.textContent=`${weatherData.main.temp}`;\n        conditions.textContent=`${weatherData.weather[0].description}`\n    } catch {\n        messEl.textContent=\"Oops, something went wrong. Try another zip code!\";\n    }\n};\n\nfunction setBackground(timeOfDay) {\n    const body = document.body;\n    switch(true) {\n        case timeOfDay >= 0 && timeOfDay < 2:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"darkestNight\");\n            break;\n        case timeOfDay >= 2 && timeOfDay < 4:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"dustyPurple\");\n            break;\n        case timeOfDay >= 4 && timeOfDay < 6:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"transitionPeach\");\n            break;\n        case timeOfDay >= 6 && timeOfDay < 8:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"dawn\");\n            break;\n        case timeOfDay >= 8 && timeOfDay < 10:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"morningYellow\");\n            break;\n        case timeOfDay >= 10 && timeOfDay < 12:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"blueWhite\");\n            break;\n        case timeOfDay >= 12 && timeOfDay < 14:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"noonBlue\");\n            break;\n        case timeOfDay >= 14 && timeOfDay < 16:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"transitionPeach\");\n            break;\n        case timeOfDay >= 16 && timeOfDay < 18:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"goldenHour\");\n            break;\n        case timeOfDay >= 18 && timeOfDay < 20:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"lightPurple\");\n            break;\n        case timeOfDay >= 20 && timeOfDay < 22:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"middlePurple\");\n            break;\n        case timeOfDay >= 22 && timeOfDay < 24:\n            console.log(timeOfDay);\n            body.classList=\"\";\n            body.classList.add(\"dustyPurple\");\n            break;\n    }\n}\n\nform.addEventListener(\"submit\", getWeather);\nsetBackground(new Date().getHours());\n\n//# sourceURL=webpack://weather/./src/index.js?");
/******/ })()
;
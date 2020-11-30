/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/database.json":
/*!***************************!*\
  !*** ./src/database.json ***!
  \***************************/
/*! default exports */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 800 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export condition [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src_day [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export src_night [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = JSON.parse(\"{\\\"2\\\":{\\\"condition\\\":\\\"Thunderstorm\\\",\\\"src\\\":\\\"images/rain.svg\\\"},\\\"3\\\":{\\\"condition\\\":\\\"Drizzle\\\",\\\"src\\\":\\\"images/rain.svg\\\"},\\\"5\\\":{\\\"condition\\\":\\\"Rain\\\",\\\"src\\\":\\\"images/rain.svg\\\"},\\\"6\\\":{\\\"condition\\\":\\\"Snow\\\",\\\"src\\\":\\\"images/snow.svg\\\"},\\\"7\\\":{\\\"condition\\\":\\\"Atmosphere\\\",\\\"src\\\":\\\"images/mist.svg\\\"},\\\"8\\\":{\\\"condition\\\":\\\"Clouds\\\",\\\"src\\\":\\\"images/cloud.svg\\\"},\\\"800\\\":{\\\"condition\\\":\\\"Clear\\\",\\\"src_day\\\":\\\"images/clear_day.svg\\\",\\\"src_night\\\":\\\"images/clear_night.svg\\\"}}\");\n\n//# sourceURL=webpack://weather/./src/database.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.json */ \"./src/database.json\");\n\n\nconst feelsLike = document.querySelector('#feelsLike');\nconst actual = document.querySelector('#actual');\nconst conditions = document.querySelector('#conditions');\nconst form = document.querySelector('#zipCodeForm');\nconst messEl = document.querySelector('#message');\nconst zipEl = document.querySelector('#zip');\nconst updateButton = document.querySelector('#change');\nconst currentZip = document.querySelector('#current');\n\nconst Zip = function() {\n    const set = function(zip) {\n        localStorage.setItem(\"zip\", zip);\n    };\n    const get = function() {\n        const zip = localStorage.getItem(\"zip\");\n        return zip;\n    };\n    return { set, get }\n}();\n\nconst View = function() {\n    const showHide = function() {\n        form.classList.toggle('hidden');\n        currentZip.classList.toggle('hidden');\n    }\n    const setImage = function(code) {\n        console.log(`you called setImage with code ${code}`);\n        code = code.toString();\n        const img = document.createElement(\"img\");\n        let src;\n        switch(true) {\n            case code.startsWith('2'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[2].src;\n                break;\n            case code.startsWith('3'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[3].src;\n                break;\n            case code.startsWith('5'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[5].src;\n                break;\n            case code.startsWith('6'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[6].src;\n                break;\n            case code.startsWith('7'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[7].src;\n                break;\n            case code === '800':\n                if (Date().getHours() < 6 || Date().getHours() > 18) {\n                    src = _database_json__WEBPACK_IMPORTED_MODULE_0__[800].src_night;\n                } else {\n                    src = _database_json__WEBPACK_IMPORTED_MODULE_0__[800].src_day;\n                }\n                break;\n            case code.startsWith('8'):\n                src = _database_json__WEBPACK_IMPORTED_MODULE_0__[8].src;\n                break;\n            }\n        img.setAttribute(\"src\", `${src}`);\n        img.setAttribute(\"id\", \"icon\");\n        conditions.appendChild(img);\n    }\n    const update = function(data, zip) {\n        messEl.textContent=\"\";\n        data.main.feels_like ? feelsLike.textContent=`${data.main.feels_like}`:feelsLike.textContent=\"Unavailable\";\n        data.main.temp ? actual.textContent=`${data.main.temp}`:actual.textContent=\"Unavailable\";\n        data.weather[0].description ? conditions.textContent=`${data.weather[0].description}`:conditions.textContent=\"Unavailable\";\n        zipEl.textContent=zip;\n        setImage(data.weather[0].id);\n    }\n    const setBackground = function(timeOfDay) {\n        const body = document.body;\n        switch(true) {\n            case timeOfDay >= 0 && timeOfDay < 2:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"darkestNight\");\n                break;\n            case timeOfDay >= 2 && timeOfDay < 4:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"dustyPurple\");\n                break;\n            case timeOfDay >= 4 && timeOfDay < 6:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"transitionPeach\");\n                break;\n            case timeOfDay >= 6 && timeOfDay < 8:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"dawn\");\n                break;\n            case timeOfDay >= 8 && timeOfDay < 10:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"morningYellow\");\n                break;\n            case timeOfDay >= 10 && timeOfDay < 12:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"blueWhite\");\n                break;\n            case timeOfDay >= 12 && timeOfDay < 14:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"noonBlue\");\n                break;\n            case timeOfDay >= 14 && timeOfDay < 16:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"transitionPeach\");\n                break;\n            case timeOfDay >= 16 && timeOfDay < 18:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"goldenHour\");\n                break;\n            case timeOfDay >= 18 && timeOfDay < 20:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"lightPurple\");\n                break;\n            case timeOfDay >= 20 && timeOfDay < 22:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"middlePurple\");\n                break;\n            case timeOfDay >= 22 && timeOfDay < 24:\n                console.log(timeOfDay);\n                body.classList=\"\";\n                body.classList.add(\"dustyPurple\");\n                break;\n        }\n    }\n    return { setBackground, update, showHide };\n}();\n\nconst Weather = function() {\n    const get = async function(event) { \n        let zipCode;\n        if (event != null) {\n            zipCode = event.target[0].value;\n            Zip.set(zipCode);\n        } else {\n            zipCode = Zip.get();\n        }\n        const appId = \"4a4a6a0dfafe6724a79ce0229fceaa76\";\n        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${appId}`\n        let response;\n        let weatherData;\n        try {\n            response = await fetch(`${url}`, {mode: 'cors'});\n            weatherData = await response.json();\n        } catch(error) {\n            console.error(error);\n            messEl.textContent=`${error}`;\n        }\n        View.update(weatherData, zipCode);\n        console.log(weatherData);\n    };\n    return { get };\n}();\n\nform.addEventListener(\"submit\", function(event) {\n    event.preventDefault();\n    View.showHide();\n    Weather.get(event);\n});\n\nupdateButton.addEventListener(\"click\", View.showHide);\n\nView.setBackground(new Date().getHours());\nWeather.get(null);\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
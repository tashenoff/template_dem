/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  objectFitImages();
});
var menu = document.getElementById("navbar");
var close = document.getElementById("close");
var open = document.getElementById("modal-open");
var shadow = document.getElementById("example");
var bgLayer = document.getElementById("bg_layer");
var hamburger = document.querySelector(".hamburger");
var mobmenu = document.querySelector(".nav__right"); // var body = document.body;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobmenu.classList.toggle("nav__right--visible");

  if (hamburger.classList.contains("is-active")) {
    // body.style.overflowY = 'hidden'; // body переменную переименуй, под какую нить осмысленную, типа wrapper
    // body.style.position = 'fixed';
    document.getElementById("bg_layer").style.display = "block";
    document.body.classList.add("modal-open");
    shadow.classList.add("shadow-wrapper--active");
  } else {
    // body.style.overflowY = 'visible';
    shadow.classList.remove("shadow-wrapper--active");
    document.body.classList.remove("modal-open");
    document.getElementById("bg_layer").removeAttribute("style"); // body.style.position = 'relative';
  }
});

window.onscroll = function () {
  scrollFunction();
};

function ScrollDown() {
  document.getElementById("start").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
} // function scrollFunction() {
//   if (
//     document.body.scrollTop > 180 ||
//     document.documentElement.scrollTop > 180
//   ) {
//     document.getElementById('navbar').classList.add('nav--fixed');
//     document.getElementById('space-navbar-fixed').style.marginTop = '94px';
//   } else {
//     document.getElementById('navbar').classList.remove('nav--fixed');
//     document.getElementById('space-navbar-fixed').removeAttribute('style');
//   }
// }


function openFunction() {
  modal.classList.add("modal--is-visible");
  document.body.classList.add("modal-open");
  document.getElementById("bg_layer").style.display = "block";
}

function closeFunction() {
  modal.classList.remove("modal--is-visible");
  document.body.classList.remove("modal-open");
  document.getElementById("bg_layer").removeAttribute("style");
}

bgLayer.onclick = function () {
  modal.classList.remove("modal--is-visible");
  document.body.classList.remove("modal-open");
  document.getElementById("bg_layer").removeAttribute("style");
};

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/sass/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\dem\themes\dem\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\dem\themes\dem\assets\sass\app.scss */"./assets/sass/app.scss");


/***/ })

/******/ });
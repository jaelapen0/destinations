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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_flickr_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/flickr_api.js */ "./src/scripts/flickr_api.js");
// src/index.js
// import "./styles/index.scss";
// require("./styles/index.scss")
 // console.log("HI")

window.fetchPhotos = _scripts_flickr_api_js__WEBPACK_IMPORTED_MODULE_0__["fetchPhotos"];
window.jsonFlickrFeed = _scripts_flickr_api_js__WEBPACK_IMPORTED_MODULE_0__["jsonFlickrFeed"]; // window.addEventListener("DOMContentLoaded", () => {
//    require('./scripts/flickr_api')
// })
// const fetchPhotos = (e) => {
//    // debugger;
//    let script = document.createElement('script');
//    script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${e.innerText}%20skyline`;
//    // script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&&per_page=3&tags=${document.getElementById("search").value}skyline`;
//    document.querySelector('head').appendChild(script);
// }
// const jsonFlickrFeed = data => {
//    // debugger;
//    data.items  = data.items.slice(0, 4);
//    // debugger;
//    let image = "";
//    data.items.forEach((photo) => {
//       // debugger 
//       let url = photo.media.m
//       // photo.media.m[photo.media.m.length - 5] = "c"
//       debugger
//       let finalUrl = `${ url.slice(0, url.length - 5)}c.jpg`
//       debugger;
//       image += `<img class="photo" src=\"${finalUrl}"\"/>`;
//    })
//    debugger;
//    document.getElementById("imgs").innerHTML = image;
// }
// let apiSearch = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=795df33dcdb5aefaf9b66f91ae41c70c&tags=skyline&per_page=3"
// import "./styles/index.scss"

/***/ }),

/***/ "./src/scripts/flickr_api.js":
/*!***********************************!*\
  !*** ./src/scripts/flickr_api.js ***!
  \***********************************/
/*! exports provided: fetchPhotos, jsonFlickrFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPhotos", function() { return fetchPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonFlickrFeed", function() { return jsonFlickrFeed; });
var fetchPhotos = function fetchPhotos(e) {
  // debugger;
  var script = document.createElement('script');
  script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=".concat(e.innerText, "%20skyline"); // script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&&per_page=3&tags=${document.getElementById("search").value}skyline`;

  document.querySelector('head').appendChild(script);
};
var jsonFlickrFeed = function jsonFlickrFeed(data) {
  // debugger;
  data.items = data.items.slice(0, 4); // debugger;

  var image = "";
  data.items.forEach(function (photo) {
    // debugger 
    var url = photo.media.m; // photo.media.m[photo.media.m.length - 5] = "c"

    debugger;
    var finalUrl = "".concat(url.slice(0, url.length - 5), "c.jpg");
    debugger;
    image += "<img class=\"photo\" src=\"".concat(finalUrl, "\"\"/>");
  });
  debugger;
  document.getElementById("imgs").innerHTML = image;
}; // export default flickrAPI => {
//    let fetchPhotos = fetchPhotos();
//    let jsonFlickrFeed = jsonFlickrFeed();
// }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZsaWNrcl9hcGkuanMiXSwibmFtZXMiOlsid2luZG93IiwiZmV0Y2hQaG90b3MiLCJqc29uRmxpY2tyRmVlZCIsImUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpbm5lclRleHQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJkYXRhIiwiaXRlbXMiLCJzbGljZSIsImltYWdlIiwiZm9yRWFjaCIsInBob3RvIiwidXJsIiwibWVkaWEiLCJtIiwiZmluYWxVcmwiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUFBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkEsa0VBQXJCO0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QkEscUVBQXhCLEMsQ0FDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLCtCOzs7Ozs7Ozs7Ozs7QUN0Q0M7QUFBQTtBQUFBO0FBQU8sSUFBTUQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0UsQ0FBRCxFQUFPO0FBQ2hDO0FBQ0EsTUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixRQUFNLENBQUNHLEdBQVAsc0ZBQXlGSixDQUFDLENBQUNLLFNBQTNGLGdCQUhnQyxDQUloQzs7QUFDQUgsVUFBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxXQUEvQixDQUEyQ04sTUFBM0M7QUFDRixDQU5PO0FBT0EsSUFBTUYsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBUyxJQUFJLEVBQUk7QUFDcEM7QUFDQUEsTUFBSSxDQUFDQyxLQUFMLEdBQWFELElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQWIsQ0FGb0MsQ0FHcEM7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUgsTUFBSSxDQUFDQyxLQUFMLENBQVdHLE9BQVgsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsQ0FBdEIsQ0FGMkIsQ0FHM0I7O0FBQ0E7QUFDQSxRQUFJQyxRQUFRLGFBQU1ILEdBQUcsQ0FBQ0osS0FBSixDQUFVLENBQVYsRUFBYUksR0FBRyxDQUFDSSxNQUFKLEdBQWEsQ0FBMUIsQ0FBTixVQUFaO0FBQ0E7QUFDQVAsU0FBSyx5Q0FBZ0NNLFFBQWhDLFdBQUw7QUFDRixHQVJEO0FBU0E7QUFDQWYsVUFBUSxDQUFDaUIsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsU0FBaEMsR0FBNENULEtBQTVDO0FBQ0YsQ0FoQk8sQyxDQWtCUjtBQUNBO0FBQ0E7QUFDQSxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIHNyYy9pbmRleC5qc1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gcmVxdWlyZShcIi4vc3R5bGVzL2luZGV4LnNjc3NcIilcbmltcG9ydCB7ZmV0Y2hQaG90b3MsIGpzb25GbGlja3JGZWVkfSBmcm9tIFwiLi9zY3JpcHRzL2ZsaWNrcl9hcGkuanNcIlxuLy8gY29uc29sZS5sb2coXCJISVwiKVxuXG53aW5kb3cuZmV0Y2hQaG90b3MgPSBmZXRjaFBob3RvcztcbndpbmRvdy5qc29uRmxpY2tyRmVlZCA9IGpzb25GbGlja3JGZWVkO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgIHJlcXVpcmUoJy4vc2NyaXB0cy9mbGlja3JfYXBpJylcblxuLy8gfSlcbi8vIGNvbnN0IGZldGNoUGhvdG9zID0gKGUpID0+IHtcbi8vICAgIC8vIGRlYnVnZ2VyO1xuLy8gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuLy8gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL2ZlZWRzL3Bob3Rvc19wdWJsaWMuZ25lP2Zvcm1hdD1qc29uJnRhZ3M9JHtlLmlubmVyVGV4dH0lMjBza3lsaW5lYDtcbi8vICAgIC8vIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9hcGkuZmxpY2tyLmNvbS9zZXJ2aWNlcy9mZWVkcy9waG90b3NfcHVibGljLmduZT9mb3JtYXQ9anNvbiYmcGVyX3BhZ2U9MyZ0YWdzPSR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIikudmFsdWV9c2t5bGluZWA7XG4vLyAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbi8vIH1cbi8vIGNvbnN0IGpzb25GbGlja3JGZWVkID0gZGF0YSA9PiB7XG4vLyAgICAvLyBkZWJ1Z2dlcjtcbi8vICAgIGRhdGEuaXRlbXMgID0gZGF0YS5pdGVtcy5zbGljZSgwLCA0KTtcbi8vICAgIC8vIGRlYnVnZ2VyO1xuLy8gICAgbGV0IGltYWdlID0gXCJcIjtcbi8vICAgIGRhdGEuaXRlbXMuZm9yRWFjaCgocGhvdG8pID0+IHtcbi8vICAgICAgIC8vIGRlYnVnZ2VyIFxuLy8gICAgICAgbGV0IHVybCA9IHBob3RvLm1lZGlhLm1cbi8vICAgICAgIC8vIHBob3RvLm1lZGlhLm1bcGhvdG8ubWVkaWEubS5sZW5ndGggLSA1XSA9IFwiY1wiXG4vLyAgICAgICBkZWJ1Z2dlclxuLy8gICAgICAgbGV0IGZpbmFsVXJsID0gYCR7IHVybC5zbGljZSgwLCB1cmwubGVuZ3RoIC0gNSl9Yy5qcGdgXG4vLyAgICAgICBkZWJ1Z2dlcjtcbi8vICAgICAgIGltYWdlICs9IGA8aW1nIGNsYXNzPVwicGhvdG9cIiBzcmM9XFxcIiR7ZmluYWxVcmx9XCJcXFwiLz5gO1xuLy8gICAgfSlcbi8vICAgIGRlYnVnZ2VyO1xuLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdzXCIpLmlubmVySFRNTCA9IGltYWdlO1xuLy8gfVxuXG4vLyBsZXQgYXBpU2VhcmNoID0gXCJodHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL3Jlc3QvP21ldGhvZD1mbGlja3IucGhvdG9zLnNlYXJjaCZhcGlfa2V5PTc5NWRmMzNkY2RiNWFlZmFmOWI2NmY5MWFlNDFjNzBjJnRhZ3M9c2t5bGluZSZwZXJfcGFnZT0zXCJcblxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiIiwiXG4gZXhwb3J0IGNvbnN0IGZldGNoUGhvdG9zID0gKGUpID0+IHtcbiAgIC8vIGRlYnVnZ2VyO1xuICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgc2NyaXB0LnNyYyA9IGBodHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL2ZlZWRzL3Bob3Rvc19wdWJsaWMuZ25lP2Zvcm1hdD1qc29uJnRhZ3M9JHtlLmlubmVyVGV4dH0lMjBza3lsaW5lYDtcbiAgIC8vIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9hcGkuZmxpY2tyLmNvbS9zZXJ2aWNlcy9mZWVkcy9waG90b3NfcHVibGljLmduZT9mb3JtYXQ9anNvbiYmcGVyX3BhZ2U9MyZ0YWdzPSR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIikudmFsdWV9c2t5bGluZWA7XG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cbiBleHBvcnQgY29uc3QganNvbkZsaWNrckZlZWQgPSBkYXRhID0+IHtcbiAgIC8vIGRlYnVnZ2VyO1xuICAgZGF0YS5pdGVtcyA9IGRhdGEuaXRlbXMuc2xpY2UoMCwgNCk7XG4gICAvLyBkZWJ1Z2dlcjtcbiAgIGxldCBpbWFnZSA9IFwiXCI7XG4gICBkYXRhLml0ZW1zLmZvckVhY2goKHBob3RvKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlciBcbiAgICAgIGxldCB1cmwgPSBwaG90by5tZWRpYS5tXG4gICAgICAvLyBwaG90by5tZWRpYS5tW3Bob3RvLm1lZGlhLm0ubGVuZ3RoIC0gNV0gPSBcImNcIlxuICAgICAgZGVidWdnZXJcbiAgICAgIGxldCBmaW5hbFVybCA9IGAke3VybC5zbGljZSgwLCB1cmwubGVuZ3RoIC0gNSl9Yy5qcGdgXG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIGltYWdlICs9IGA8aW1nIGNsYXNzPVwicGhvdG9cIiBzcmM9XFxcIiR7ZmluYWxVcmx9XCJcXFwiLz5gO1xuICAgfSlcbiAgIGRlYnVnZ2VyO1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdzXCIpLmlubmVySFRNTCA9IGltYWdlO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmbGlja3JBUEkgPT4ge1xuLy8gICAgbGV0IGZldGNoUGhvdG9zID0gZmV0Y2hQaG90b3MoKTtcbi8vICAgIGxldCBqc29uRmxpY2tyRmVlZCA9IGpzb25GbGlja3JGZWVkKCk7XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==
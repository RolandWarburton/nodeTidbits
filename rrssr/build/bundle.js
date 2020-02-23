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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app */ \"./src/app.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n\n // import bodyParser from 'body-parser'\n\n\n\n\nvar port = 8080;\n\nvar compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(compression());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('build/public'));\napp.get('*', function (req, res, next) {\n  var context = {};\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    location: req.url,\n    content: context\n  })));\n  var html = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Roland</title>\\n    </head>\\n    <body>\\n        <div id='root'>\".concat(content, \"</div>\\n        <script src=\\\"client_bundle.js\\\"></script>\\n    </body>\\n    </html>\\n    \");\n  res.send(html);\n});\napp.listen(port, function () {\n  console.log(\"Server running on port \".concat(port));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanM/MWQ2OSJdLCJuYW1lcyI6WyJwb3J0IiwiY29tcHJlc3Npb24iLCJyZXF1aXJlIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29udGV4dCIsImNvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsInVybCIsImh0bWwiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxJQUFiOztBQUNBLElBQU1DLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUEzQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUdDLDhDQUFPLEVBQW5CO0FBQ0FELEdBQUcsQ0FBQ0UsR0FBSixDQUFRSixXQUFXLEVBQW5CO0FBQ0FFLEdBQUcsQ0FBQ0UsR0FBSixDQUFRRCw4Q0FBTyxDQUFDRSxJQUFSLEVBQVI7QUFDQUgsR0FBRyxDQUFDRSxHQUFKLENBQVFELDhDQUFPLFVBQVAsQ0FBZSxjQUFmLENBQVI7QUFFQUQsR0FBRyxDQUFDSSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzdCLE1BQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUVBLE1BQU1DLE9BQU8sR0FBR0MsdUVBQWMsQ0FDMUIsMkRBQUMseURBQUQsUUFDSSwyREFBQyxnREFBRDtBQUFLLFlBQVEsRUFBRUwsR0FBRyxDQUFDTSxHQUFuQjtBQUF3QixXQUFPLEVBQUVIO0FBQWpDLElBREosQ0FEMEIsQ0FBOUI7QUFNQSxNQUFNSSxJQUFJLDZRQVNXSCxPQVRYLCtGQUFWO0FBZUFILEtBQUcsQ0FBQ08sSUFBSixDQUFTRCxJQUFUO0FBQ0gsQ0F6QkQ7QUEyQkFaLEdBQUcsQ0FBQ2MsTUFBSixDQUFXakIsSUFBWCxFQUFpQixZQUFNO0FBQUVrQixTQUFPLENBQUNDLEdBQVIsa0NBQXNDbkIsSUFBdEM7QUFBK0MsQ0FBeEUiLCJmaWxlIjoiLi9zZXJ2ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4vc3JjL2FwcCdcbmltcG9ydCB7cmVuZGVyVG9TdHJpbmd9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNvbnN0IHBvcnQgPSA4MDgwXG5jb25zdCBjb21wcmVzc2lvbiA9IHJlcXVpcmUoJ2NvbXByZXNzaW9uJylcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnYnVpbGQvcHVibGljJykpXG5cbmFwcC5nZXQoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge31cblxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFN0YXRpY1JvdXRlcj5cbiAgICAgICAgICAgIDxBcHAgbG9jYXRpb249e3JlcS51cmx9IGNvbnRlbnQ9e2NvbnRleHR9IC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgIClcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgICAgICA8dGl0bGU+Um9sYW5kPC90aXRsZT5cbiAgICA8L2hlYWQ+XG4gICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9J3Jvb3QnPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJjbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgICBgXG5cbiAgICByZXMuc2VuZChodG1sKVxufSlcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7IGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBvbiBwb3J0ICR7cG9ydH1gKSB9KVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  _objectDestructuringEmpty(_ref);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    }\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsK0VBQWU7QUFBQTs7QUFDMUIsU0FDSSwyREFBQyxtREFBRCxRQUNJLDJEQUFDLGtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsVUFBTSxFQUFFLGdCQUFBQSxLQUFLO0FBQUEsYUFDekIsMkRBQUMsbURBQUQsT0FEeUI7QUFBQTtBQUE3QixJQURKLENBREo7QUFPSCxDIiwiZmlsZSI6Ii4vc3JjL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiByZW5kZXI9e3Byb3BzID0+IChcbiAgICAgICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgICAgKX0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar foo = function foo() {\n  console.log(\"js alert!\");\n};\n\nfunction Home(_ref) {\n  var location = _ref.location;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home Page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return foo();\n    }\n  }, \"Click Me\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS5qcz9jZTU3Il0sIm5hbWVzIjpbImZvbyIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsQ0FGRDs7QUFJZSxTQUFTQyxJQUFULE9BQTBCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ3JDLFNBQ0ksd0VBQ0ksbUZBREosRUFFSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1KLEdBQUcsRUFBVDtBQUFBO0FBQWpCLGdCQUZKLENBREo7QUFNSCIsImZpbGUiOiIuL3NyYy9wYWdlcy9Ib21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBmb28gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJqcyBhbGVydCFcIilcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xvY2F0aW9ufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZm9vKCl9PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Home.js\n");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiP2Y3OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY29tcHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///compression\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/OTQzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kb20vc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIj9hMzcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router\n");

/***/ })

/******/ });
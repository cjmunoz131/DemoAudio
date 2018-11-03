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
/******/ 	__webpack_require__.p = "";
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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const url = \"http://localhost:3000/employees\";\n\nconst onResolve = json => {\n    console.log(json);\n    console.log(json[0]);\n    let tabla = document.createElement('table');\n    let tr1 = document.createElement('TR');\n    let thead = document.createElement('thead');\n    let tbody = document.createElement('tbody');\n    //let audio = new Audio('D:/Home/JavaScript/WorkspacePractica/hello.mp3');\n    //audio.play();\n\n    \n     \n    //aud.src = 'D:/Home/JavaScript/WorkspacePractica/hello.mp3';\n\n\n    thead.appendChild(tr1);\n    tabla.appendChild(thead);\n    tabla.appendChild(tbody);\n//header\n    Object.keys(json[0]).forEach( (key) => {\n      let th = document.createElement('TH');\n      th.appendChild(document.createTextNode(key))\n      tr1.appendChild(th);\n     \n    });\n//body\n    json.forEach(function(element) {\n        let tr = document.createElement('TR');\n        tbody.appendChild(tr);\n        \n        Object.keys(element).forEach(function(key) {\n            let td = document.createElement('TD');\n            td.appendChild(document.createTextNode(element[key]))\n            tr.appendChild(td);\n        });\n        \n    });\n    tabla.className = \"table\";\n    document.body.appendChild(tabla);\n    Object.keys(json[0]).forEach( (key) => {\n    if(key !== \"id\"){\n      let div = document.createElement('div');\n      let labelName = document.createElement('label')\n      let inputName = document.createElement('input');\n      div.appendChild(labelName);\n      div.appendChild(inputName);\n      labelName.tagName =key;\n      labelName.textContent = `${key}: `;\n      document.body.appendChild(div);\n    }\n    });\n    let boton = document.createElement('button');\n    boton.className = \"button is-primary\";\n    boton.textContent = 'Agregar';\n\n    document.body.appendChild(boton);\n\n    let loaded = false;\n    let aud = new Audio('D:/Home/JavaScript/WorkspacePractica/welcome.mp3');\n    let botonUnmuted = document.getElementById(\"unmuted\");\n    //botonUnmuted.id = 'unmuted';\n    //boton.textContent = 'reproducir';\n    let botonMuted = document.getElementById(\"muted\");\n\n    botonUnmuted.addEventListener('click',() => {\n      if(loaded){\n        aud.play();\n      }\n    });\n    botonMuted.addEventListener('click',() => {\n      if(loaded){\n        aud.pause();\n      }\n    });\n    aud.addEventListener('loadeddata', function() \n    {\n        loaded = true;\n    }, false);\n     \n    aud.addEventListener('error' , function() \n    {\n        alert('error loading audio');\n    }, false);\n}\n\nlet valor = fetch(url)\n    .then(response => { return response.json() })\n    .then(onResolve).catch((error) => {console.log(error)} );\n    \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
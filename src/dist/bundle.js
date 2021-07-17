/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_frontend_listItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/frontend/listItems */ \"./src/modules/frontend/listItems.js\");\n/* harmony import */ var _modules_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backend/fakeTasks */ \"./src/modules/backend/fakeTasks.js\");\n\n\n\n\nconst run = () => {\n  let load = JSON.parse(localStorage.getItem('tasks'));\n\n  if (load == null) {\n    load = _modules_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_2__.tasks;\n  }\n\n  (0,_modules_frontend_listItems__WEBPACK_IMPORTED_MODULE_1__.default)(load);\n};\n\nrun();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/backend/fakeTasks.js":
/*!******************************************!*\
  !*** ./src/modules/backend/fakeTasks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"clearTasks\": () => (/* binding */ clearTasks),\n/* harmony export */   \"addTasks\": () => (/* binding */ addTasks),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* eslint-disable import/no-mutable-exports */\n\nlet tasks = [\n  { description: 'walk', completed: false, index: 2 },\n  { description: 'groomer', completed: false, index: 0 },\n  { description: 'vet', completed: false, index: 1 },\n];\n\nconst clearTasks = () => {\n  tasks = [];\n};\n\nconst addTasks = (description, completed, index) => {\n  tasks.push({ description, completed, index: parseInt(index, 10) });\n};\n\nconst store = () => {\n  const json = JSON.stringify(tasks);\n  localStorage.setItem('tasks', json);\n};\n\n\n\n/* eslint-enable import/no-mutable-exports */\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/backend/fakeTasks.js?");

/***/ }),

/***/ "./src/modules/frontend/completed.js":
/*!*******************************************!*\
  !*** ./src/modules/frontend/completed.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/fakeTasks */ \"./src/modules/backend/fakeTasks.js\");\n\n\nconst updateTask = (task, check) => {\n  const taskInTasks = _backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__.tasks.find((t) => t.description === task.description);\n\n  taskInTasks.completed = check;\n\n  task.completed = check;\n  (0,_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__.store)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/frontend/completed.js?");

/***/ }),

/***/ "./src/modules/frontend/dragndrop.js":
/*!*******************************************!*\
  !*** ./src/modules/frontend/dragndrop.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragstart\": () => (/* binding */ dragstart),\n/* harmony export */   \"dragover\": () => (/* binding */ dragover),\n/* harmony export */   \"dragleave\": () => (/* binding */ dragleave),\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dragend\": () => (/* binding */ dragend)\n/* harmony export */ });\n/* harmony import */ var _backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/fakeTasks */ \"./src/modules/backend/fakeTasks.js\");\n\n\nconst dragstart = (element) => {\n  element.classList.add('flying');\n};\n\nconst dragover = (element, e) => {\n  e.preventDefault();\n\n  element.classList.add('dragover');\n};\n\nconst dragleave = (element) => {\n  element.classList.remove('dragover');\n};\n\nconst drop = (element) => {\n  const flying = document.querySelector('.flying');\n\n  element.before(flying);\n\n  const draggables = document.querySelectorAll('.draggable');\n\n  let i = 0;\n  draggables.forEach((draggable) => {\n    draggable.setAttribute('task', i);\n    i += 1;\n  });\n\n  (0,_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__.clearTasks)();\n  draggables.forEach((draggable) => {\n    const description = draggable.getElementsByClassName('description')[0].textContent;\n    const completed = draggable.getElementsByClassName('completed')[0].checked;\n    const index = draggable.getAttribute('task');\n\n    (0,_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__.addTasks)(description, completed, index);\n\n    (0,_backend_fakeTasks__WEBPACK_IMPORTED_MODULE_0__.store)();\n  });\n\n  element.classList.remove('dragover');\n};\n\nconst dragend = (element) => {\n  element.classList.remove('flying');\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/frontend/dragndrop.js?");

/***/ }),

/***/ "./src/modules/frontend/listItems.js":
/*!*******************************************!*\
  !*** ./src/modules/frontend/listItems.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dragndrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragndrop */ \"./src/modules/frontend/dragndrop.js\");\n/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed */ \"./src/modules/frontend/completed.js\");\n\n\n\nconst createList = (tasks) => {\n  const title = () => {\n    const li = document.createElement('li');\n    li.id = 'title-box';\n\n    const p = document.createElement('p');\n    p.textContent = 'Today\\'s To Do';\n\n    const i = document.createElement('i');\n    i.classList.add('fas', 'fa-sync-alt');\n    i.id = 'refresh';\n\n    li.appendChild(p);\n    li.appendChild(i);\n\n    return li;\n  };\n\n  const addItem = () => {\n    const li = document.createElement('li');\n    li.id = 'new-item-box';\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.placeholder = 'Add to your list...';\n    input.id = 'new-item';\n\n    li.appendChild(input);\n\n    return li;\n  };\n\n  const item = (task) => {\n    const li = document.createElement('li');\n    li.classList.add('draggable');\n    li.setAttribute('task', task.index);\n    li.draggable = true;\n\n    const div = document.createElement('div');\n\n    const input = document.createElement('input');\n    input.classList.add('completed');\n    input.type = 'checkbox';\n    input.name = 'completed';\n    input.addEventListener('click', () => (0,_completed__WEBPACK_IMPORTED_MODULE_1__.default)(task, input.checked));\n\n    const p = document.createElement('p');\n    p.classList.add('description');\n    p.textContent = task.description;\n\n    div.appendChild(input);\n    div.appendChild(p);\n\n    li.appendChild(div);\n\n    const i = document.createElement('i');\n    i.classList.add('fas', 'fa-trash-alt');\n\n    li.addEventListener('dragstart', () => (0,_dragndrop__WEBPACK_IMPORTED_MODULE_0__.dragstart)(li));\n\n    li.addEventListener('dragover', (e) => (0,_dragndrop__WEBPACK_IMPORTED_MODULE_0__.dragover)(li, e));\n\n    li.addEventListener('dragleave', () => (0,_dragndrop__WEBPACK_IMPORTED_MODULE_0__.dragleave)(li));\n\n    li.addEventListener('drop', () => {\n      (0,_dragndrop__WEBPACK_IMPORTED_MODULE_0__.drop)(li);\n    });\n\n    li.addEventListener('dragend', () => {\n      (0,_dragndrop__WEBPACK_IMPORTED_MODULE_0__.dragend)(li);\n    });\n\n    li.appendChild(i);\n\n    return li;\n  };\n\n  const clearComplete = () => {\n    const li = document.createElement('li');\n\n    li.textContent = 'Clear all completed';\n    li.id = 'clear';\n\n    return li;\n  };\n\n  const ul = document.querySelector('ul');\n\n  ul.appendChild(title());\n  ul.appendChild(addItem());\n\n  tasks.sort((a, b) => ((a.index > b.index) ? 1 : -1));\n  tasks.forEach((task) => ul.appendChild(item(task)));\n\n  ul.appendChild(clearComplete());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/frontend/listItems.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> $font-p: \\\"Roboto\\\", sans-serif;\\n| $font-h: \\\"Otomanopee One\\\", sans-serif;\\n| $p-size: 1rem;\");\n\n//# sourceURL=webpack://webpack-demo/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
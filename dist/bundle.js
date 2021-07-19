/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody,\\ndiv,\\nmain,\\nul,\\nli,\\np,\\ni,\\nh1,\\nh3 {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  color: rgb(44, 44, 44);\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nmain {\\n  max-width: 400px;\\n  height: auto;\\n  box-shadow: 0.5rem 0.5rem;\\n}\\n\\nul {\\n  border: rgb(221, 210, 210) 1px solid;\\n  border-radius: 5px;\\n}\\n\\nli {\\n  padding: 0.5rem;\\n  justify-content: inherit;\\n  flex-direction: row;\\n}\\n\\np {\\n  font-size: 2rem;\\n  width: auto;\\n}\\n\\nh1 {\\n  font-size: 2rem;\\n}\\n\\nh3 {\\n  font-size: 2rem;\\n}\\n\\n.dragover {\\n  background-color: rgb(117, 103, 103);\\n}\\n\\n#clear {\\n  background-color: rgb(15, 15, 21);\\n  justify-content: center;\\n  color: antiquewhite;\\n}\\n\\ndiv {\\n  flex-direction: row;\\n}\\n\\ninput {\\n  margin-right: 0.5rem;\\n}\\n\\n.description {\\n  font-size: 1rem;\\n}\\n\\ni {\\n  width: auto;\\n  margin-right: 1vw;\\n}\\n\\n.completed {\\n  justify-content: flex-start;\\n}\\n\\n#title-box {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin-left: 5vw;\\n}\\n\\n#refresh {\\n  display: flex;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_frontend_listItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/frontend/listItems */ \"./src/modules/frontend/listItems.js\");\n/* harmony import */ var _modules_backend_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backend/task */ \"./src/modules/backend/task.js\");\n\n\n\n\nconst run = () => {\n  (0,_modules_frontend_listItems__WEBPACK_IMPORTED_MODULE_1__.default)((0,_modules_backend_task__WEBPACK_IMPORTED_MODULE_2__.loadTasks)());\n};\nrun();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/backend/task.js":
/*!*************************************!*\
  !*** ./src/modules/backend/task.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"clearTasks\": () => (/* binding */ clearTasks),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"updateTaskCompleted\": () => (/* binding */ updateTaskCompleted),\n/* harmony export */   \"inputCreateTask\": () => (/* binding */ inputCreateTask),\n/* harmony export */   \"updateTaskDescription\": () => (/* binding */ updateTaskDescription),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* eslint-disable import/no-mutable-exports */\n\nlet tasks = [];\n\nconst loadTasks = () => {\n  let load = JSON.parse(localStorage.getItem('tasks'));\n\n  if (load == null) {\n    load = [];\n  }\n\n  tasks = load;\n\n  return tasks;\n};\n\nconst clearTasks = () => {\n  tasks = [];\n};\n\nconst addTask = (description, completed, index) => {\n  tasks.push({ description, completed, index: parseInt(index, 10) });\n};\n\nconst store = () => {\n  const json = JSON.stringify(tasks);\n  localStorage.setItem('tasks', json);\n};\n\nconst updateTaskCompleted = (index, check) => {\n  const taskInTasks = tasks.find((t) => t.index === index);\n\n  taskInTasks.completed = check;\n\n  store();\n};\n\nconst updateTaskDescription = (index, description) => {\n  const taskInTasks = tasks.find((t) => t.index === index);\n\n  taskInTasks.description = description;\n\n  store();\n};\n\nconst inputCreateTask = (description) => {\n  let index = 0;\n\n  if (tasks.length > 0) {\n    index = tasks[tasks.length - 1].index + 1;\n  }\n\n  addTask(description, false, index);\n  store();\n};\n\n\n\n/* eslint-enable import/no-mutable-exports */\n\n//# sourceURL=webpack://webpack-demo/./src/modules/backend/task.js?");

/***/ }),

/***/ "./src/modules/frontend/listItems.js":
/*!*******************************************!*\
  !*** ./src/modules/frontend/listItems.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modifyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyList */ \"./src/modules/frontend/modifyList.js\");\n/* harmony import */ var _backend_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend/task */ \"./src/modules/backend/task.js\");\n\n\n\nconst createList = (tasklist) => {\n  const ul = document.querySelector('ul');\n\n  const title = () => {\n    const li = document.createElement('li');\n    li.id = 'title-box';\n\n    const p = document.createElement('p');\n    p.textContent = 'Today\\'s To Do';\n\n    const i = document.createElement('i');\n    i.classList.add('fas', 'fa-sync-alt');\n    i.id = 'refresh';\n\n    li.appendChild(p);\n    li.appendChild(i);\n\n    return li;\n  };\n\n  ul.appendChild(title());\n\n  const item = (task) => {\n    const li = document.createElement('li');\n    li.classList.add('draggable');\n    li.setAttribute('task', task.index);\n    li.draggable = true;\n\n    const div = document.createElement('div');\n\n    const input = document.createElement('input');\n    input.classList.add('completed');\n    input.type = 'checkbox';\n    input.name = 'completed';\n    input.addEventListener('click', () => (0,_backend_task__WEBPACK_IMPORTED_MODULE_1__.updateTaskCompleted)(parseInt(li.getAttribute('task'), 10), input.checked));\n\n    const p = document.createElement('p');\n    p.classList.add('description');\n    p.contentEditable = 'true';\n    p.textContent = task.description;\n    p.addEventListener('input', () => (0,_backend_task__WEBPACK_IMPORTED_MODULE_1__.updateTaskDescription)(parseInt(li.getAttribute('task'), 10), p.textContent));\n\n    div.appendChild(input);\n    div.appendChild(p);\n\n    li.appendChild(div);\n\n    const i = document.createElement('i');\n    i.classList.add('fas', 'fa-trash-alt');\n    i.addEventListener('click', () => {\n      ul.removeChild(li);\n\n      (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.remakeList)();\n    });\n\n    li.addEventListener('dragstart', () => (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.dragstart)(li));\n\n    li.addEventListener('dragover', (e) => (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.dragover)(li, e));\n\n    li.addEventListener('dragleave', () => (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.dragleave)(li));\n\n    li.addEventListener('drop', () => {\n      (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.drop)(li);\n    });\n\n    li.addEventListener('dragend', () => {\n      (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.dragend)(li);\n    });\n\n    li.appendChild(i);\n\n    return li;\n  };\n\n  const clearComplete = () => {\n    const li = document.createElement('li');\n\n    li.textContent = 'Clear all completed';\n    li.id = 'clear';\n    li.addEventListener('click', () => {\n      const draggables = [...document.querySelectorAll('.draggable')];\n\n      const newList = draggables.filter((draggable) => draggable.getElementsByClassName('completed')[0].checked === false);\n\n      draggables.forEach((draggable) => ul.removeChild(draggable));\n\n      newList.forEach((item) => ul.appendChild(item));\n\n      (0,_modifyList__WEBPACK_IMPORTED_MODULE_0__.remakeList)();\n\n      const clear = document.getElementById('clear');\n      ul.appendChild(clear);\n    });\n\n    return li;\n  };\n\n  const addItem = () => {\n    const li = document.createElement('li');\n    li.id = 'new-item-box';\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.placeholder = 'Add to your list...';\n    input.id = 'new-item';\n    input.addEventListener('keydown', (e) => {\n      if (e.key === 'Enter') {\n        (0,_backend_task__WEBPACK_IMPORTED_MODULE_1__.inputCreateTask)(input.value);\n        ul.appendChild(item(_backend_task__WEBPACK_IMPORTED_MODULE_1__.tasks[_backend_task__WEBPACK_IMPORTED_MODULE_1__.tasks.length - 1]));\n\n        const clear = document.getElementById('clear');\n        ul.appendChild(clear);\n\n        input.value = '';\n      }\n    });\n\n    li.appendChild(input);\n\n    return li;\n  };\n\n  ul.appendChild(addItem());\n\n  tasklist.sort((a, b) => ((a.index > b.index) ? 1 : -1));\n  tasklist.forEach((task) => ul.appendChild(item(task)));\n\n  ul.appendChild(clearComplete());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/frontend/listItems.js?");

/***/ }),

/***/ "./src/modules/frontend/modifyList.js":
/*!********************************************!*\
  !*** ./src/modules/frontend/modifyList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragstart\": () => (/* binding */ dragstart),\n/* harmony export */   \"dragover\": () => (/* binding */ dragover),\n/* harmony export */   \"dragleave\": () => (/* binding */ dragleave),\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dragend\": () => (/* binding */ dragend),\n/* harmony export */   \"remakeList\": () => (/* binding */ remakeList)\n/* harmony export */ });\n/* harmony import */ var _backend_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/task */ \"./src/modules/backend/task.js\");\n\n\nconst remakeList = () => {\n  const draggables = document.querySelectorAll('.draggable');\n\n  let i = 0;\n  draggables.forEach((draggable) => {\n    draggable.setAttribute('task', i);\n    i += 1;\n  });\n\n  (0,_backend_task__WEBPACK_IMPORTED_MODULE_0__.clearTasks)();\n  draggables.forEach((draggable) => {\n    const description = draggable.getElementsByClassName('description')[0].textContent;\n    const completed = draggable.getElementsByClassName('completed')[0].checked;\n    const index = draggable.getAttribute('task');\n\n    (0,_backend_task__WEBPACK_IMPORTED_MODULE_0__.addTask)(description, completed, index);\n\n    (0,_backend_task__WEBPACK_IMPORTED_MODULE_0__.store)();\n  });\n};\n\nconst dragstart = (element) => {\n  element.classList.add('flying');\n};\n\nconst dragover = (element, e) => {\n  e.preventDefault();\n\n  element.classList.add('dragover');\n};\n\nconst dragleave = (element) => {\n  element.classList.remove('dragover');\n};\n\nconst drop = (element) => {\n  const flying = document.querySelector('.flying');\n\n  element.before(flying);\n\n  remakeList();\n\n  element.classList.remove('dragover');\n};\n\nconst dragend = (element) => {\n  element.classList.remove('flying');\n};\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/frontend/modifyList.js?");

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
/******/ 			id: moduleId,
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
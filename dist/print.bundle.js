/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/dragdrop.js":
/*!******************************!*\
  !*** ./src/code/dragdrop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragLeave": () => (/* binding */ dragLeave),
/* harmony export */   "drop": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status */ "./src/code/status.js");


const dragStart = (elm) => {
    elm.classList.add('drag');
};

const dragEnd = (elm) => {
    elm.classList.remove('drag');
};

const dragOver = (elm, event) => {
    event.preventDefault();
    elm.classList.add('over-element');
}

const dragLeave = (elm) => {
    elm.classList.remove('over-element');
};

const orderData = () => {
    const dragE = document.querySelectorAll('.draggable');
    let i = 0;
    dragE.forEach((element) => {
        element.setAttribute('index', i);
        i += 1;
    });
};

const updateData = () => {
    const dragE = document.querySelectorAll('.draggable');
    dragE.forEach((element) => {
        const description = element.getElementsByClassName('description')[0].textContent;
        const check = element.getElementsByClassName('completed')[0].checked;
        const index = parseInt(element.getAttribute('index'), 10);
        const newTask = {
            description,
            check,
            index,
        };
        (0,_status__WEBPACK_IMPORTED_MODULE_0__.addData)(newTask);
    });
};

const drop = (elm) => {
    elm.classList.remove('over-element');
    const elmDragged = document.querySelector('drag');
    elm.before(elmDragged);
    orderData();
    (0,_status__WEBPACK_IMPORTED_MODULE_0__.clearData)();
    updateData();
    (0,_status__WEBPACK_IMPORTED_MODULE_0__.saveData)();
};



/***/ }),

/***/ "./src/code/listElements.js":
/*!**********************************!*\
  !*** ./src/code/listElements.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragdrop */ "./src/code/dragdrop.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/code/status.js");




const listELement = (task) => {
    const element = document.createElement('li');
    element.draggable = true;
    element.classList.add('draggable');
    element.setAttribute('index', task.index);
    element.addEventListener('dragstart', () => { (0,_dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragStart)(element);});
    element.addEventListener('dragover', (event) => { (0,_dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragOver) (element, event);});
    element.addEventListener('dragleave', () => {(0,_dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragLeave) (element);});
    element.addEventListener('drop', () => {(0,_dragdrop__WEBPACK_IMPORTED_MODULE_0__.drop)(element);});
    element.addEventListener('dragend', () => {(0,_dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragEnd)(element);});
    const divE = document.createElement('div');
    divE.classList.add('div-content');
    const par = document.createElement('p');
    par.textContent = task.description;
    par.classList.add('description');
    const check = document.createElement('input');
    check.classList.add('completed');
    check.type = 'checkbox';
    check.check = task.completed;
    check.addEventListener('change', () => {
        (0,_status__WEBPACK_IMPORTED_MODULE_1__.updateStatus)(parseInt(element.getAttribute('index'),10), check);
    });

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v');
    divE.appendChild(check);
    divE.appendChild(par);
    element.appendChild(divE);
    element.appendChild(icon);
    element.classList.add('list-element');
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listELement);


/***/ }),

/***/ "./src/code/status.js":
/*!****************************!*\
  !*** ./src/code/status.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "saveData": () => (/* binding */ saveData),
/* harmony export */   "clearData": () => (/* binding */ clearData),
/* harmony export */   "addData": () => (/* binding */ addData),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus),
/* harmony export */   "loadData": () => (/* binding */ loadData)
/* harmony export */ });
let data = [{ description: 'meditate', completed : false, index : 0}, 
{ description: 'exercise', completed : false, index : 1}, 
{ description: 'code', completed : false, index : 2}];

const saveData = () => {
  const jSon = JSON.stringify('data');
  localStorage.setItem('data', jSon);
};

const updateStatus = (index, element) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.completed = element.checked;
  saveData();
}

const clearData = () => {
  data = [];
}; 

const addData = (obj) => {
  data.push(obj);
}

const loadData = () => {
  const localData = localStorage.getItem('data');
  data = localData === null ? data : JSON.parse(localData);
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/code/loadlist.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _listElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listElements */ "./src/code/listElements.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/code/status.js");




function createList() {
  const todoList = document.getElementById('list');
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "Today's to dos";
  text.classList.add('title-text');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-sync-alt');
  firstElement.appendChild(text);
  firstElement.appendChild(icon);
  const searchE = document.createElement('li');
  const textS = document.createElement('input');
  textS.placeholder = 'Add to list';
  textS.classList.add('text-input');
  searchE.appendChild(textS);
  const callE = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = 'Clear list';
  btn.classList.add('btn-clear');
  callE.appendChild(btn);
  todoList.appendChild(firstElement);
  todoList.appendChild(searchE);
  
  _status__WEBPACK_IMPORTED_MODULE_1__.data.forEach((task) => {
    const element = (0,_listElements__WEBPACK_IMPORTED_MODULE_0__.default)(task);
    todoList.appendChild(element);
  });
  todoList.appendChild(callE);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vc3JjL2NvZGUvZHJhZ2Ryb3AuanMiLCJ3ZWJwYWNrOi8vVG8tZG8tbGlzdC8uL3NyYy9jb2RlL2xpc3RFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vc3JjL2NvZGUvc3RhdHVzLmpzIiwid2VicGFjazovL1RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vc3JjL2NvZGUvbG9hZGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPO0FBQ2YsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUI7O0FBRXFCOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELENBQUMsb0RBQVMsV0FBVztBQUN0RSxxREFBcUQsQ0FBQyxtREFBUSxtQkFBbUI7QUFDakYsaURBQWlELG9EQUFTLFlBQVk7QUFDdEUsNENBQTRDLCtDQUFJLFdBQVc7QUFDM0QsK0NBQStDLGtEQUFPLFdBQVc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFZO0FBQ3BCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzNCLGFBQWEsdURBQXVEO0FBQ3BFLENBQUMsdURBQXVEO0FBQ3hELENBQUMsbURBQW1EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0E7QUFDVDs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBWTtBQUNkLG9CQUFvQixzREFBVztBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6InByaW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZWFyRGF0YSwgYWRkRGF0YSwgc2F2ZURhdGEgfSBmcm9tICcuL3N0YXR1cyc7XG5cbmNvbnN0IGRyYWdTdGFydCA9IChlbG0pID0+IHtcbiAgICBlbG0uY2xhc3NMaXN0LmFkZCgnZHJhZycpO1xufTtcblxuY29uc3QgZHJhZ0VuZCA9IChlbG0pID0+IHtcbiAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpO1xufTtcblxuY29uc3QgZHJhZ092ZXIgPSAoZWxtLCBldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxtLmNsYXNzTGlzdC5hZGQoJ292ZXItZWxlbWVudCcpO1xufVxuXG5jb25zdCBkcmFnTGVhdmUgPSAoZWxtKSA9PiB7XG4gICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXItZWxlbWVudCcpO1xufTtcblxuY29uc3Qgb3JkZXJEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZScpO1xuICAgIGxldCBpID0gMDtcbiAgICBkcmFnRS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpO1xuICAgICAgICBpICs9IDE7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZScpO1xuICAgIGRyYWdFLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NyaXB0aW9uJylbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wbGV0ZWQnKVswXS5jaGVja2VkO1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpbmRleCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNoZWNrLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgIH07XG4gICAgICAgIGFkZERhdGEobmV3VGFzayk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBkcm9wID0gKGVsbSkgPT4ge1xuICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyLWVsZW1lbnQnKTtcbiAgICBjb25zdCBlbG1EcmFnZ2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZHJhZycpO1xuICAgIGVsbS5iZWZvcmUoZWxtRHJhZ2dlZCk7XG4gICAgb3JkZXJEYXRhKCk7XG4gICAgY2xlYXJEYXRhKCk7XG4gICAgdXBkYXRlRGF0YSgpO1xuICAgIHNhdmVEYXRhKCk7XG59O1xuXG5leHBvcnQge1xuICAgIGRyYWdTdGFydCwgZHJhZ0VuZCwgZHJhZ092ZXIsIGRyYWdMZWF2ZSwgZHJvcCxcbn07IiwiaW1wb3J0IHtcbiAgICBkcmFnU3RhcnQsIGRyYWdFbmQsIGRyYWdPdmVyLCBkcmFnTGVhdmUsIGRyb3Bcbn0gZnJvbSAnLi9kcmFnZHJvcCdcblxuaW1wb3J0IHsgdXBkYXRlU3RhdHVzIH0gZnJvbSAnLi9zdGF0dXMnO1xuXG5jb25zdCBsaXN0RUxlbWVudCA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFzay5pbmRleCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7IGRyYWdTdGFydChlbGVtZW50KTt9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7IGRyYWdPdmVyIChlbGVtZW50LCBldmVudCk7fSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7ZHJhZ0xlYXZlIChlbGVtZW50KTt9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoKSA9PiB7ZHJvcChlbGVtZW50KTt9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7ZHJhZ0VuZChlbGVtZW50KTt9KTtcbiAgICBjb25zdCBkaXZFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RS5jbGFzc0xpc3QuYWRkKCdkaXYtY29udGVudCcpO1xuICAgIGNvbnN0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXIudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHBhci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVjay5jaGVjayA9IHRhc2suY29tcGxldGVkO1xuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdHVzKHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpbmRleCcpLDEwKSwgY2hlY2spO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lbGxpcHNpcy12Jyk7XG4gICAgZGl2RS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgZGl2RS5hcHBlbmRDaGlsZChwYXIpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2RSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZWxlbWVudCcpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0RUxlbWVudDtcbiIsImxldCBkYXRhID0gW3sgZGVzY3JpcHRpb246ICdtZWRpdGF0ZScsIGNvbXBsZXRlZCA6IGZhbHNlLCBpbmRleCA6IDB9LCBcbnsgZGVzY3JpcHRpb246ICdleGVyY2lzZScsIGNvbXBsZXRlZCA6IGZhbHNlLCBpbmRleCA6IDF9LCBcbnsgZGVzY3JpcHRpb246ICdjb2RlJywgY29tcGxldGVkIDogZmFsc2UsIGluZGV4IDogMn1dO1xuXG5jb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgalNvbiA9IEpTT04uc3RyaW5naWZ5KCdkYXRhJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgalNvbik7XG59O1xuXG5jb25zdCB1cGRhdGVTdGF0dXMgPSAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgY29uc3QgZmluZE9iaiA9IGRhdGEuZmluZCgob2JqKSA9PiBvYmouaW5kZXggPT09IGluZGV4KTtcbiAgZmluZE9iai5jb21wbGV0ZWQgPSBlbGVtZW50LmNoZWNrZWQ7XG4gIHNhdmVEYXRhKCk7XG59XG5cbmNvbnN0IGNsZWFyRGF0YSA9ICgpID0+IHtcbiAgZGF0YSA9IFtdO1xufTsgXG5cbmNvbnN0IGFkZERhdGEgPSAob2JqKSA9PiB7XG4gIGRhdGEucHVzaChvYmopO1xufVxuXG5jb25zdCBsb2FkRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcbiAgZGF0YSA9IGxvY2FsRGF0YSA9PT0gbnVsbCA/IGRhdGEgOiBKU09OLnBhcnNlKGxvY2FsRGF0YSk7XG59O1xuXG5leHBvcnQge1xuICBkYXRhLCBzYXZlRGF0YSwgY2xlYXJEYXRhLCBhZGREYXRhLCB1cGRhdGVTdGF0dXMsIGxvYWREYXRhLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsaXN0RUxlbWVudCBmcm9tICcuL2xpc3RFbGVtZW50cyc7XG5pbXBvcnQgbGlzdEVsZW1lbnQgZnJvbSAnLi9saXN0RWxlbWVudHMnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vc3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICBjb25zdCBmaXJzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiVG9kYXkncyB0byBkb3NcIjtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXN5bmMtYWx0Jyk7XG4gIGZpcnN0RWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgZmlyc3RFbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xuICBjb25zdCBzZWFyY2hFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdGV4dFMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0ZXh0Uy5wbGFjZWhvbGRlciA9ICdBZGQgdG8gbGlzdCc7XG4gIHRleHRTLmNsYXNzTGlzdC5hZGQoJ3RleHQtaW5wdXQnKTtcbiAgc2VhcmNoRS5hcHBlbmRDaGlsZCh0ZXh0Uyk7XG4gIGNvbnN0IGNhbGxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5pbm5lclRleHQgPSAnQ2xlYXIgbGlzdCc7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tY2xlYXInKTtcbiAgY2FsbEUuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZmlyc3RFbGVtZW50KTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoc2VhcmNoRSk7XG4gIFxuICBkYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gbGlzdEVMZW1lbnQodGFzayk7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjYWxsRSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
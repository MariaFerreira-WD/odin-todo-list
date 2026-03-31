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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\n\nconst projects = [(0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject)()];\n\nlet activeProject = projects[0];\n\n(0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, (project) => {\n    activeProject = project;\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(activeProject.todos);\n});\n\n// Create new project\nlet addProject = document.getElementById(\"add-project-btn\");\naddProject.addEventListener(\"click\", () => {\n    const newProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.Project(prompt(\"Insert the project name\"));\n    projects.push(newProject);\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects, onProjectClick);\n    });\n\n    function onProjectClick(project) {\n    activeProject = project;\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(activeProject.todos);\n}\n\nconst todos = [];\n\n// Create new todo\nlet addTodo = document.getElementById(\"add-todo-btn\");\naddTodo.addEventListener(\"click\", () => {\n    const newTodo = new _todos_js__WEBPACK_IMPORTED_MODULE_1__.Todo(prompt(\"Insert Todo\"));\n    activeProject.addTodo(newTodo);\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderTodos)(activeProject.todos);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/projects.js"
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject)\n/* harmony export */ });\nclass Project { \n   constructor(name){\n    this.name = name;\n    this.todos = [];\n   }\n\n   addTodo(todo) {\n    this.todos.push(todo);\n   }\n\n   removeTodo(index){\n    this.todos.splice(index, 1);\n   }\n\n   getTodo(index) {\n    return this.todos[index];\n   }\n}\n\nfunction defaultProject(){\n    return new Project(\"Default\");\n}\n\n//# sourceURL=webpack:///./src/projects.js?\n}");

/***/ },

/***/ "./src/todos.js"
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    title;\n    description = \"\";\n    dueDate;\n    priority;\n    notes = \"\";\n    checklist = [];\n\n    constructor(title, description, dueDate,priority,notes,checklist) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checklist = checklist;\n        this.done = false;\n    }\n}\n\n//# sourceURL=webpack:///./src/todos.js?\n}");

/***/ },

/***/ "./src/ui.js"
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderProjects(projects) {\n    const projectList = document.getElementById(\"project-list\");\n    projectList.innerHTML = \"\";\n    \n    \n      projects.forEach(project => {\n        const li = document.createElement('li');\n        li.textContent = project.name;\n        li.addEventListener('click', () => onProjectClick(project));\n        projectList.appendChild(li);\n    });\n\n}\n\nfunction renderTodos(todos) {\n    const todoList = document.getElementById(\"todo-list\");\n    todoList.innerHTML= \"\";\n\ntodos.forEach(todos => {\n    const li = document.createElement(\"li\");\n    li.textContent = todos.title;\n    todoList.appendChild(li);\n})\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/ui.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
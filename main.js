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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reviews_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.js */ \"./src/reviews.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n(function() {\r\n    let contentDiv = document.getElementById('content');\r\n    let documentBody = document.body;\r\n\r\n    function loadHeaderAndFooter() {\r\n        let header = createHeader();\r\n        let footer = createFooter();\r\n        appendAllElementsToParent(documentBody, header, footer);\r\n        attachEventListenersToButtons();\r\n    }\r\n    loadHeaderAndFooter();\r\n    // Utility functions\r\n    function addElementsToContentDiv(...args) {\r\n        args.forEach((element) => {\r\n            contentDiv.appendChild(element);\r\n        });\r\n    }\r\n    function removeAllElementsFromContentDiv() {\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n    }\r\n    function createParagraphWithInnerHTML(text) {\r\n        let p = document.createElement('p');\r\n        p.innerHTML = text;\r\n        return p;\r\n    }\r\n    function createParagraphWithTextContent(text) {\r\n        let p = document.createElement('p');\r\n        p.textContent = text;\r\n        return p;\r\n    }\r\n    function createDivWithID(text) {\r\n        let div = document.createElement('div');\r\n        div.id = text;\r\n        return div;\r\n    }\r\n    function createMultipleDivs(num , className= \"\") {\r\n        let divs = [];\r\n        for (let i = 0; i < num; i++) {\r\n            let div = document.createElement('div');\r\n            if (className) {\r\n                div.classList.add(className);\r\n            }\r\n            \r\n            divs.push(div);\r\n        }\r\n        return divs;\r\n    }\r\n        \r\n    \r\n    function createButton(text) {\r\n        let button = document.createElement('button');\r\n        button.textContent = text;\r\n        return button;\r\n    }\r\n    function createImage(src) {\r\n        let img = document.createElement('img');\r\n        img.src = src;\r\n        return img;\r\n    }\r\n    function appendAllElementsToParent(parent, ...args) {\r\n        args.forEach((element) => {\r\n            parent.appendChild(element);\r\n        });\r\n    }\r\n    function addClassToElements(className, ...args) {\r\n        args.forEach((element) => {\r\n            element.classList.add(className);\r\n        });\r\n    }\r\n\r\n    // Main functions\r\n    function createHeader() {\r\n        let header = document.createElement('header');\r\n        let h1 = document.createElement('h1');\r\n        h1.textContent = 'The Code Cafe';\r\n        header.appendChild(h1);\r\n        let h2 = document.createElement('h2');\r\n        h2.textContent = 'Where every byte is delicious!';\r\n        header.appendChild(h2);\r\n        let homeButton = createButton('Home');\r\n        homeButton.id = 'homeButton';\r\n        let menuButton = createButton('Menu');\r\n        menuButton.id = 'menuButton';\r\n        let reviewsButton = createButton('Reviews');\r\n        reviewsButton.id = 'reviewsButton';\r\n        addClassToElements('headerButton', homeButton, menuButton, reviewsButton);\r\n        let headerButtons = createDivWithID(\"headerButtons\")\r\n        \r\n        appendAllElementsToParent(headerButtons, homeButton, menuButton, reviewsButton);\r\n        appendAllElementsToParent(header, headerButtons);\r\n        \r\n        return header;\r\n    }\r\n    function createFooter() {\r\n        let footer = document.createElement('footer');\r\n        \r\n        let contactDiv = createDivWithID('ContactUs');\r\n        let p = createParagraphWithInnerHTML(`Contact us at <a href = 'https://github.com/chiragchhabria2' target = '_blank'>chiragchhabria2</a> `);\r\n        contactDiv.appendChild(p);\r\n        let addressDiv = createDivWithID('Address');\r\n        addressDiv.textContent = `Address : Hopefully somewhere in the cloud`\r\n        appendAllElementsToParent(footer, contactDiv, addressDiv,);\r\n        \r\n        return footer;\r\n    }\r\n\r\n    function createHomeContent() {\r\n        let homeContent = createDivWithID(\"homeContent\");\r\n      \r\n        let homeText1 = createParagraphWithInnerHTML(`Welcome to <span class = \"codeCafe\">Code Cafe </span>,the restaurant where every byte is delicious! Try our React Rice Bowl, it's so good, it'll make you want to write more code! Or how about our Python Pizza , the perfect pick-me-up for those late-night coding sessions?  We use the freshest ingredients in our dishes, sourced straight from the cloud `);\r\n        \r\n        let homeText2 = createParagraphWithInnerHTML(`At <span class = \"codeCafe\">Code Cafe </span>,we're all about bringing the tech community together over good food and good humor. So whether you're a full-stack developer or a beginner coder, come join us for a meal and some laughs. Our servers aren't just serving food, they're serving up a side of witty jokes too!`);\r\n\r\n        let homeText3 = createParagraphWithInnerHTML(`Got questions or want to make a reservation? No problem, our developers are standing by to help you out. Just give us a call or shoot us an email and we'll get you set up faster than a recursive function.`)\r\n\r\n        let homeText4 = createParagraphWithInnerHTML(`Check out our menu and customer reviews for a taste of what's in store at <span class=\"codeCafe\">Code Cafe </span>. Our food won't give you a syntax error, but it might give you a food coma.`);\r\n        appendAllElementsToParent(homeContent, homeText1 , homeText2 , homeText3 , homeText4);\r\n        return homeContent;\r\n    }\r\n    function createMenuContent() {\r\n        let menuContent = createDivWithID(\"menuContent\");\r\n        let menuItemsDivs = createMultipleDivs(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length, \"menuItem\");\r\n       \r\n        appendAllElementsToParent(menuContent , ...menuItemsDivs);\r\n        for (let i = 0; i < menuItemsDivs.length; i++) {\r\n            createMenuItemContent(menuItemsDivs[i], _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i]);\r\n            \r\n        }\r\n        \r\n        return menuContent;\r\n    }\r\n    function createMenuItemContent(menuItemDiv , menuItem) {\r\n        let menuItemImage = createImage(menuItem.image);\r\n        let menuItemName = createParagraphWithTextContent(menuItem.name);\r\n        let menuItemDescription = createParagraphWithTextContent(menuItem.description);\r\n        let menuItemPrice = createParagraphWithTextContent(menuItem.price + \" $\");\r\n        appendAllElementsToParent(menuItemDiv, menuItemImage, menuItemName, menuItemDescription, menuItemPrice);\r\n\r\n    }\r\n    function createReviewsContent() {\r\n        let reviewsContent = createDivWithID(\"reviewsContent\");\r\n        let allReviews = [];\r\n        _reviews_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((review) => {\r\n           allReviews.push(review.createReview())\r\n        });\r\n        appendAllElementsToParent(reviewsContent, ...allReviews);\r\n        return reviewsContent;\r\n    }\r\n    \r\n    function attachEventListenersToButtons(){\r\n        let homeButton = document.getElementById('homeButton');\r\n        let menuButton = document.getElementById('menuButton');\r\n        let reviewsButton = document.getElementById('reviewsButton');\r\n\r\n        homeButton.addEventListener('click', () => {\r\n            removeAllElementsFromContentDiv();\r\n            addElementsToContentDiv(createHomeContent());\r\n        });\r\n        homeButton.click();\r\n        menuButton.addEventListener('click', () => {\r\n            removeAllElementsFromContentDiv();\r\n            addElementsToContentDiv(createMenuContent());\r\n        }\r\n        );\r\n        reviewsButton.addEventListener('click', () => {\r\n            removeAllElementsFromContentDiv();\r\n            addElementsToContentDiv(createReviewsContent());\r\n        }\r\n        );\r\n    }\r\n})()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nlet menuItems = [\r\n    {\r\n        name : \"React Rice Bowl\",\r\n        description : \"A bowl of rice with React, Redux, and React-Router. Topped with a few class components, just to spice things up!\",\r\n        price : 10,\r\n        image : __webpack_require__(/*! ./assets/Rice-bowl.jpeg */ \"./src/assets/Rice-bowl.jpeg\")\r\n\r\n   } ,\r\n  {\r\n        name : \"Python Pizza\",\r\n        description : \"A pizza with Python, Flask, and Django.\",\r\n        price : 30,\r\n        image : __webpack_require__(/*! ./assets/Pizza.jpeg */ \"./src/assets/Pizza.jpeg\")\r\n      } ,\r\n     {\r\n        name : \"Stack Overflow Sandwich\",\r\n        description : \"A sandwich with JavaScript, HTML, and CSS and tears of developers who can't figure out why their code isn't working.\",\r\n        price : 20,\r\n        image : __webpack_require__(/*! ./assets/Sandwich.jpeg */ \"./src/assets/Sandwich.jpeg\")\r\n        \r\n    }\r\n    ,\r\n     {\r\n        name : \"C++ Coffee\",\r\n        description : \"Wake up and smell the code with our C++ Coffee - the perfect brew to get your programming juices flowing\",\r\n        price : 5,\r\n        image : __webpack_require__(/*! ./assets/Coffee.jpeg */ \"./src/assets/Coffee.jpeg\")\r\n    } ,\r\n     {\r\n        name : \"Java Juice\",\r\n        description : \"Whether you need a pick-me-up for your code or just love the taste of java, our Java Juice is the perfect\",\r\n        price : 5,\r\n        image : __webpack_require__(/*! ./assets/Juice.jpeg */ \"./src/assets/Juice.jpeg\")      \r\n    } ,\r\n   \r\n     {\r\n        name : \"Java Chip Cookies\",\r\n        description : \"Bite into a byte of pure deliciousness with our Java Chip Cookies - the perfect snack for any programmer with a sweet tooth\",\r\n        price : 10,\r\n        image :   __webpack_require__(/*! ./assets/cookie.jpeg */ \"./src/assets/cookie.jpeg\")\r\n     } ,\r\n     {\r\n        name : \"Node Noodles\",\r\n        description : \"Our Node Noodles are the perfect fuel for your coding marathon - packed with the nutrients you need to keep your brain sharp\",\r\n        price : 15,\r\n        image : __webpack_require__(/*! ./assets/Noodles.jpeg */ \"./src/assets/Noodles.jpeg\")\r\n    } ,\r\n     {\r\n        name : \"Byte sized burgers\",\r\n        description : \"Our Byte-sized Burgers are the perfect coding fuel - small enough to eat with one hand, but packed with enough flavor to satisfy any programmer's appetite.\",\r\n        price : 15,\r\n        image : __webpack_require__(/*! ./assets/Burger.jpeg */ \"./src/assets/Burger.jpeg\")\r\n    } ,\r\n]\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nlet reviews = [];\r\n(function() {\r\n    new CreateReview(\"This is a great place to eat. I love the food and the atmosphere. The staff is very friendly and helpful. I would recommend this place to anyone.\" , \"Mark Zuckerburg\" , \"12/12/2019\"),\r\n    new CreateReview(\"I never thought I'd find a restaurant that combines my two loves: programming and food. The Java Chip Cookies were a perfect balance of sweet and java. The Node Noodles were spicy and delicious. The atmosphere is very comfortable and the decor is on point. Definitely check this place out if you're a programmer or a foodie or both!\" , \"Linux Torvalds\" , \"15/11/2022\"),\r\n    new CreateReview(\"I love this place! The food is amazing and the staff is super friendly. I would definitely recommend this place to anyone who loves food and programming!\" ,\"Chris Wanstrath\" , \"12/2/2022\")\r\n})();\r\n    \r\n\r\nfunction CreateReview(text , author , date) {\r\n    this.text = text;\r\n    this.author = author;\r\n    this.date = date;\r\n    reviews.push(this);\r\n}\r\nCreateReview.prototype.createReview = function() {\r\n    let div = document.createElement('div');\r\n    div.className = 'review';\r\n    let p = document.createElement('p');\r\n    let p2 = document.createElement('p');\r\n    let p3 = document.createElement('p');\r\n    p.textContent = this.text;\r\n    p2.textContent = this.author;\r\n    p3.textContent = this.date;\r\n    div.appendChild(p);\r\n    div.appendChild(p2);\r\n    div.appendChild(p3);\r\n    return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviews);\n\n//# sourceURL=webpack://restaurant-page/./src/reviews.js?");

/***/ }),

/***/ "./src/assets/Burger.jpeg":
/*!********************************!*\
  !*** ./src/assets/Burger.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a31420c6da7df383c50.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Burger.jpeg?");

/***/ }),

/***/ "./src/assets/Coffee.jpeg":
/*!********************************!*\
  !*** ./src/assets/Coffee.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d59722bf8f25ea4a2dec.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Coffee.jpeg?");

/***/ }),

/***/ "./src/assets/Juice.jpeg":
/*!*******************************!*\
  !*** ./src/assets/Juice.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe5f4d13b8f5484b94fa.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Juice.jpeg?");

/***/ }),

/***/ "./src/assets/Noodles.jpeg":
/*!*********************************!*\
  !*** ./src/assets/Noodles.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54d51e8a2308d090c39b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Noodles.jpeg?");

/***/ }),

/***/ "./src/assets/Pizza.jpeg":
/*!*******************************!*\
  !*** ./src/assets/Pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4a1d664c48c308d0492.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Pizza.jpeg?");

/***/ }),

/***/ "./src/assets/Rice-bowl.jpeg":
/*!***********************************!*\
  !*** ./src/assets/Rice-bowl.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d5bb8291291de0ae1f6.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Rice-bowl.jpeg?");

/***/ }),

/***/ "./src/assets/Sandwich.jpeg":
/*!**********************************!*\
  !*** ./src/assets/Sandwich.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8c9a1c71605e9d7696c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Sandwich.jpeg?");

/***/ }),

/***/ "./src/assets/cookie.jpeg":
/*!********************************!*\
  !*** ./src/assets/cookie.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b890f415d01ce7b411f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookie.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
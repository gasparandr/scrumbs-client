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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/EntryPoint.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-log-in.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-log-in.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-view.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-view.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Authentication */\n#authentication-view-container {\n  width: 370px;\n  height: 100%;\n  margin: 57px auto 0;\n  font-weight: bold; }\n\n#authentication-view-container h1,\n#authentication-view-container h2 {\n  text-align: center;\n  margin: 0 auto; }\n\n#authentication-view-container h1 {\n  font-size: 1.85em;\n  line-height: 2em; }\n\n#authentication-view-container h2 {\n  max-width: 315px;\n  line-height: 1.6em; }\n\n#authentication-view-container .input-wrapper {\n  margin-top: 25px; }\n\n#input-email-login ~ .input-icon,\n#input-email-signup ~ .input-icon {\n  width: 16px;\n  height: 12px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/email-icon.svg */ "./src/_style/img/icons/email-icon.svg")) + "); }\n\n#input-password-login ~ .input-icon,\n#input-password-signup ~ .input-icon {\n  width: 12px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/password-icon.svg */ "./src/_style/img/icons/password-icon.svg")) + "); }\n\n#input-name-signup ~ .input-icon {\n  width: 14px;\n  height: 15px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/user-icon.svg */ "./src/_style/img/icons/user-icon.svg")) + "); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-view.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-view.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Header */\n#header-view-container {\n  background: #FFFFFF;\n  height: 80px;\n  padding-left: 30px;\n  padding-right: 37px;\n  position: relative; }\n\n#header-view-container #logo {\n  display: inline-block;\n  width: 120px;\n  height: 30px;\n  margin-top: 18px;\n  background: url(" + escape(__webpack_require__(/*! ../img/icons/scrumbs-logo-colored.svg */ "./src/_style/img/icons/scrumbs-logo-colored.svg")) + ") no-repeat center/contain;\n  position: relative; }\n\n#header-view-container .button-group {\n  position: absolute;\n  right: 37px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 50px; }\n\n#header-button {\n  width: 165px;\n  margin-left: 35px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n/**\r\n   * Reset browser margins and padding\r\n   */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n   * Correct `block` display not defined in IE 8/9.\r\n   */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\na {\n  text-decoration: none; }\n\ninput {\n  outline: none; }\n\n/** Buttons */\n.primary-button {\n  display: inline-block;\n  border-radius: 5px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.97em;\n  height: 50px;\n  line-height: 51px;\n  background: linear-gradient(90deg, #6CB7FF 0%, #7985FF 100%);\n  box-shadow: 0 15px 8px -9px rgba(118, 147, 255, 0.45);\n  transition: all 0.1s ease-out; }\n\n.primary-button:hover {\n  transform: scale(1.02);\n  box-shadow: 0 18px 10px -14px rgba(118, 147, 255, 0.45); }\n\n.primary-button:active {\n  transform: scale(1);\n  box-shadow: 0 1px 1px 0 rgba(118, 147, 255, 0.45); }\n\n/** Inputs */\n.input-group {\n  margin-bottom: 20px;\n  position: relative; }\n\n.input-group .input-label {\n  display: block;\n  margin-bottom: 5px; }\n\n.input-group .input-container {\n  height: 50px;\n  background-color: #FFFFFF;\n  box-shadow: inset 0 0 0 1px #E1E0E9;\n  border-radius: 5px;\n  margin-bottom: 4px;\n  position: relative; }\n\n.input-group .input {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 5px;\n  padding: 0 20px 0 40px;\n  background-color: transparent; }\n\n.input-container.input-type-password .input {\n  padding-right: 40px; }\n\n.input-container.input-type-password::after {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 15px;\n  right: 15px;\n  background: black; }\n\n.input-group .input:focus {\n  box-shadow: inset 0 0 0 1px black; }\n\n.input-group .input-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain; }\n\n.input-group .input-error {\n  font-size: 0.85em;\n  color: #D00262; }\n\n/** Body - Main container - */\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n  font-size: 14px; }\n\nbody {\n  font-family: Muli;\n  position: relative;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f7f7fa+0,fffcfc+100 */\n  background: #f7f7fa;\n  /* Old browsers */\n  background: -moz-linear-gradient(top, #f7f7fa 0%, #fffcfc 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, #f7f7fa 0%, #fffcfc 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #f7f7fa 0%, #fffcfc 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7fa', endColorstr='#fffcfc',GradientType=0 );\n  /* IE6-9 */\n  /** SCSS */\n  /** // Needs latest Compass, add '@import \"compass\"' to your scss\r\n    // Permalink - use to edit and share this gradient:\r\n    // http://colorzilla.com/gradient-editor/#f7f7fa+0,fffcfc+100\r\n    background-color: rgb(247,247,250); // Old browsers\r\n    @include filter-gradient(#f7f7fa, #fffcfc, vertical); // IE6-9\r\n    @include background-image(linear-gradient(top, rgba(247,247,250,1) 0%,rgba(255,252,252,1) 100%)); */ }\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url(" + escape(__webpack_require__(/*! ../img/icons/bg-shape.svg */ "./src/_style/img/icons/bg-shape.svg")) + ") no-repeat center 92px;\n  background-size: 90%; }\n\n#content-container {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: calc( 100% - 107px);\n  background: #FFFFFF;\n  border-radius: 5px 5px 0 0;\n  box-shadow: 0 2px 15px 0 rgba(221, 220, 234, 0.7); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/EntryPoint.ts":
/*!***************************!*\
  !*** ./src/EntryPoint.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewManager_1 = __webpack_require__(/*! ./core/ViewManager */ "./src/core/ViewManager.ts");
window.onload = function () {
    new ViewManager_1.ViewManager();
};


/***/ }),

/***/ "./src/_style/img/icons/bg-shape.svg":
/*!*******************************************!*\
  !*** ./src/_style/img/icons/bg-shape.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/bg-shape.svg";

/***/ }),

/***/ "./src/_style/img/icons/email-icon.svg":
/*!*********************************************!*\
  !*** ./src/_style/img/icons/email-icon.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/email-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/password-icon.svg":
/*!************************************************!*\
  !*** ./src/_style/img/icons/password-icon.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/password-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/scrumbs-logo-colored.svg":
/*!*******************************************************!*\
  !*** ./src/_style/img/icons/scrumbs-logo-colored.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/scrumbs-logo-colored.svg";

/***/ }),

/***/ "./src/_style/img/icons/user-icon.svg":
/*!********************************************!*\
  !*** ./src/_style/img/icons/user-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/user-icon.svg";

/***/ }),

/***/ "./src/_style/style-sheets/authentication-log-in.scss":
/*!************************************************************!*\
  !*** ./src/_style/style-sheets/authentication-log-in.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./authentication-log-in.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-log-in.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/authentication-view.scss":
/*!**********************************************************!*\
  !*** ./src/_style/style-sheets/authentication-view.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./authentication-view.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-view.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/header-component.scss":
/*!*******************************************************!*\
  !*** ./src/_style/style-sheets/header-component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./header-component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-component.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/header-view.scss":
/*!**************************************************!*\
  !*** ./src/_style/style-sheets/header-view.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./header-view.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/header-view.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/main.scss":
/*!*******************************************!*\
  !*** ./src/_style/style-sheets/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_view-templates/authentication-log-in.html":
/*!********************************************************!*\
  !*** ./src/_view-templates/authentication-log-in.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"authentication-title\">Log in to your account</h1>\r\n\r\n<h2 class=\"authentication-description\">Enter your email and password here and you'll be on your way</h2>\r\n\r\n<div class=\"input-wrapper\">\r\n\r\n    <div class=\"input-group\">\r\n\r\n        <label class=\"input-label\" for=\"input-email-login\">Email</label>\r\n\r\n        <div class=\"input-container input-type-text\">\r\n\r\n            <input id=\"input-email-login\" type=\"text\" class=\"input\" placeholder=\"Enter your email address\">\r\n\r\n            <span class=\"input-icon\"></span>\r\n\r\n        </div>\r\n\r\n        <span class=\"input-error\">Some error message</span>\r\n\r\n    </div>\r\n    <!-- email -->\r\n\r\n    <div class=\"input-group\">\r\n\r\n            <label class=\"input-label\" for=\"input-password-login\">Password</label>\r\n\r\n            <div class=\"input-container input-type-password\">\r\n\r\n                <input id=\"input-password-login\" type=\"text\" class=\"input\" placeholder=\"5+ characters\">\r\n\r\n                <span class=\"input-icon\"></span>\r\n\r\n            </div>\r\n\r\n            <span class=\"input-error\">Some error message</span>\r\n\r\n    </div>\r\n    <!-- password -->\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/authentication-view.html":
/*!******************************************************!*\
  !*** ./src/_view-templates/authentication-view.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"authentication-log-in-container\"></div>\r\n\r\n\r\n<div id=\"authentication-sign-up-container\"></div>";

/***/ }),

/***/ "./src/_view-templates/header-component.html":
/*!***************************************************!*\
  !*** ./src/_view-templates/header-component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<a href=\"#\" id=\"logo\"></a>\r\n\r\n<div class=\"button-group\">\r\n\r\n    <span class=\"\">Already have an account?</span>\r\n\r\n    <a href=\"#\" id=\"header-button\" class=\"primary-button\">Login</a>\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/header-view.html":
/*!**********************************************!*\
  !*** ./src/_view-templates/header-view.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"header-component-container\"></div>";

/***/ }),

/***/ "./src/authentication/AuthenticationLogin.ts":
/*!***************************************************!*\
  !*** ./src/authentication/AuthenticationLogin.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/authentication-log-in.scss */ "./src/_style/style-sheets/authentication-log-in.scss");
// HTML
var template = __webpack_require__(/*! ../_view-templates/authentication-log-in.html */ "./src/_view-templates/authentication-log-in.html");
var AuthenticationLogin = /** @class */ (function (_super) {
    __extends(AuthenticationLogin, _super);
    function AuthenticationLogin(view, container) {
        var _this = _super.call(this, view, container) || this;
        _this.container.innerHTML = template;
        _this.enterScene();
        return _this;
    }
    AuthenticationLogin.prototype.registerEventListeners = function () {
    };
    AuthenticationLogin.prototype.unregisterEventListeners = function () {
    };
    AuthenticationLogin.prototype.enterScene = function () {
        this.registerEventListeners();
    };
    AuthenticationLogin.prototype.exitScene = function (exitType) {
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        console.info("Exit being called in authentication login view component");
        this.view.componentExited(this.name);
    };
    return AuthenticationLogin;
}(ViewComponent_1.ViewComponent));
exports.AuthenticationLogin = AuthenticationLogin;


/***/ }),

/***/ "./src/authentication/AuthenticationView.ts":
/*!**************************************************!*\
  !*** ./src/authentication/AuthenticationView.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var AuthenticationLogin_1 = __webpack_require__(/*! ./AuthenticationLogin */ "./src/authentication/AuthenticationLogin.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/authentication-view.scss */ "./src/_style/style-sheets/authentication-view.scss");
// HTML
var authenticationViewTemplate = __webpack_require__(/*! ../_view-templates/authentication-view.html */ "./src/_view-templates/authentication-view.html");
var AuthenticationView = /** @class */ (function (_super) {
    __extends(AuthenticationView, _super);
    function AuthenticationView() {
        var _this = _super.call(this, "AuthenticationView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "authentication-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER).appendChild(_this.container);
        _this.container.innerHTML = authenticationViewTemplate;
        _this.authenticationLoginContainer = document.getElementById("authentication-log-in-container");
        _this.authenticationSignUpContainer = document.getElementById("authentication-sign-up-container");
        _this.authenticationLogin = new AuthenticationLogin_1.AuthenticationLogin(_this, _this.authenticationLoginContainer);
        _this.enterScene();
        return _this;
    }
    AuthenticationView.prototype.enterScene = function () {
    };
    AuthenticationView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.authenticationLogin.exitScene(exitType);
        this.authenticationSignUp.exitScene(exitType);
    };
    AuthenticationView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        return notifications;
    };
    AuthenticationView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            default:
                break;
        }
    };
    AuthenticationView.prototype.handleSignal = function (signal) {
        console.log("Signal received in " + this.NAME + ": " + signal.name);
        switch (signal.name) {
            default:
                break;
        }
    };
    return AuthenticationView;
}(View_1.View));
exports.AuthenticationView = AuthenticationView;


/***/ }),

/***/ "./src/connection/ConnectionProxy.ts":
/*!*******************************************!*\
  !*** ./src/connection/ConnectionProxy.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Proxy_1 = __webpack_require__(/*! ../core/Proxy */ "./src/core/Proxy.ts");
var ConnectionProxy = /** @class */ (function (_super) {
    __extends(ConnectionProxy, _super);
    function ConnectionProxy(proxyName) {
        return _super.call(this, proxyName, "http://68.183.72.89:3000/api/v1") || this;
    }
    return ConnectionProxy;
}(Proxy_1.Proxy));
exports.ConnectionProxy = ConnectionProxy;


/***/ }),

/***/ "./src/core/CoreEntity.ts":
/*!********************************!*\
  !*** ./src/core/CoreEntity.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager_1 = __webpack_require__(/*! ./EventManager */ "./src/core/EventManager.ts");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(entityName) {
        this.NAME = entityName;
        this.eventManager = EventManager_1.EventManager._instance;
        this.register();
    }
    CoreEntity.prototype.register = function () {
        this.eventManager.registerEntity(this.NAME, this);
    };
    CoreEntity.prototype.onRegister = function () {
    };
    CoreEntity.prototype.unregister = function () {
        this.eventManager.unregirsterEntity(this.NAME);
    };
    CoreEntity.prototype.onUnregister = function () {
    };
    CoreEntity.prototype.sendNotification = function (notificationName, body) {
        this.eventManager.sendNotification(notificationName, body);
    };
    CoreEntity.prototype.listNotificationInterests = function () {
        return [];
    };
    CoreEntity.prototype.handleNotification = function (notification) {
    };
    return CoreEntity;
}());
exports.CoreEntity = CoreEntity;


/***/ }),

/***/ "./src/core/EventManager.ts":
/*!**********************************!*\
  !*** ./src/core/EventManager.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.notifications = {};
        this.entities = {};
        if (EventManager._instance) {
            throw new Error("Error: Instantiation failed! Use EventManager.getInstance() instead of new.");
        }
        EventManager._instance = this;
    }
    EventManager.prototype.getInstance = function () {
        return EventManager._instance;
    };
    EventManager.prototype.registerNotification = function (notificationName) {
        if (!this.notifications[notificationName])
            this.notifications[notificationName] = new Array();
    };
    EventManager.prototype.unregisterNotification = function (notificationName) {
        delete this.notifications[notificationName];
    };
    EventManager.prototype.registerEntity = function (entityName, entity) {
        if (!this.entities[entityName]) {
            this.entities[entityName] = entity;
            entity.onRegister();
            var notificationInterests = entity.listNotificationInterests();
            for (var i = 0; i < notificationInterests.length; i++) {
                this.registerNotification(notificationInterests[i]);
                this.notifications[notificationInterests[i]].push(entity);
            }
        }
    };
    EventManager.prototype.unregirsterEntity = function (entityName) {
        var targetEntity = this.entities[entityName];
        var notificationInterests = targetEntity.listNotificationInterests();
        for (var i = 0; i < notificationInterests.length; i++) {
            var listeningEntities = this.notifications[notificationInterests[i]];
            for (var j = 0; j < listeningEntities.length; j++) {
                if (listeningEntities[j] === targetEntity) {
                    listeningEntities.splice(j, 1);
                }
            }
        }
        targetEntity.onUnregister();
        delete this.entities[entityName];
    };
    EventManager.prototype.sendNotification = function (notificationName, data) {
        if (this.notifications[notificationName]) {
            var entities = this.notifications[notificationName];
            for (var i = 0; i < entities.length; i++) {
                entities[i].handleNotification({ name: notificationName, data: data });
            }
        }
    };
    EventManager._instance = new EventManager();
    return EventManager;
}());
exports.EventManager = EventManager;


/***/ }),

/***/ "./src/core/Proxy.ts":
/*!***************************!*\
  !*** ./src/core/Proxy.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var Proxy = /** @class */ (function (_super) {
    __extends(Proxy, _super);
    function Proxy(proxyName, address) {
        var _this = _super.call(this, proxyName) || this;
        _this.address = address;
        return _this;
    }
    Proxy.prototype.getVO = function () {
        return Proxy.VO;
    };
    Proxy.prototype.setVO = function (vo) {
        Proxy.VO = vo;
    };
    Proxy.prototype.httpRequest = function (method, endpoint, data, success, failure) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, this.address + endpoint, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        if (Proxy.token)
            xhr.setRequestHeader('Authorization', Proxy.token);
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        if (data) {
            xhr.send(JSON.stringify(data));
        }
        else {
            xhr.send();
        }
        return xhr;
    };
    return Proxy;
}(CoreEntity_1.CoreEntity));
exports.Proxy = Proxy;


/***/ }),

/***/ "./src/core/SystemConstants.ts":
/*!*************************************!*\
  !*** ./src/core/SystemConstants.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SystemConstants = /** @class */ (function () {
    function SystemConstants() {
    }
    SystemConstants.ENV_MOBILE = "ENV_MOBILE";
    SystemConstants.ENV_DESKTOP = "ENV_DESKTOP";
    SystemConstants.ENV_WEB = "ENV_WEB";
    SystemConstants.MAIN_CONTAINER = "content-container";
    SystemConstants.HEADING_CONTAINER = "heading-container";
    return SystemConstants;
}());
exports.SystemConstants = SystemConstants;


/***/ }),

/***/ "./src/core/View.ts":
/*!**************************!*\
  !*** ./src/core/View.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(viewName) {
        var _this = _super.call(this, viewName) || this;
        _this.NAME = viewName;
        _this.viewComponentExitCount = {};
        return _this;
    }
    View.prototype.handleSignal = function (signal) {
    };
    View.prototype.enterScene = function (callback) {
    };
    View.prototype.exitScene = function (exitType, callback) {
    };
    View.prototype.componentExited = function (componentName) {
        this.viewComponentExitCount[componentName] = true;
        for (var key in this.viewComponentExitCount) {
            if (this.viewComponentExitCount.hasOwnProperty(key)) {
                if (!this.viewComponentExitCount[key]) {
                    console.warn("Not all view components finished exiting, aborting.");
                    return;
                }
            }
        }
        if (this.exitCallback) {
            this.container.parentNode.removeChild(this.container);
            this.unregister();
            this.exitCallback();
        }
        else {
            this.container.parentNode.removeChild(this.container);
            console.warn("No exit callback available on view!");
        }
    };
    return View;
}(CoreEntity_1.CoreEntity));
exports.View = View;


/***/ }),

/***/ "./src/core/ViewComponent.ts":
/*!***********************************!*\
  !*** ./src/core/ViewComponent.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConnectionProxy_1 = __webpack_require__(/*! ../connection/ConnectionProxy */ "./src/connection/ConnectionProxy.ts");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(view, container) {
        this.view = view;
        this.container = container;
        this.name = this.constructor.name;
        this.connection = new ConnectionProxy_1.ConnectionProxy(this.name + "Proxy");
        this.view.viewComponentExitCount[this.name] = null;
    }
    ViewComponent.prototype.sendSignal = function (name, data, sender) {
        this.view.handleSignal({ name: name, data: data, sender: sender });
    };
    ViewComponent.prototype.enterScene = function () {
    };
    ViewComponent.prototype.exitScene = function (exitType) {
        if (this.connection)
            this.connection.unregister();
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ "./src/core/ViewExitTypes.ts":
/*!***********************************!*\
  !*** ./src/core/ViewExitTypes.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewExitTypes = /** @class */ (function () {
    function ViewExitTypes() {
    }
    ViewExitTypes.DEFAULT = "DEFAULT";
    ViewExitTypes.SWITCH = "SWITCH";
    return ViewExitTypes;
}());
exports.ViewExitTypes = ViewExitTypes;


/***/ }),

/***/ "./src/core/ViewManager.ts":
/*!*********************************!*\
  !*** ./src/core/ViewManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AuthenticationView_1 = __webpack_require__(/*! ../authentication/AuthenticationView */ "./src/authentication/AuthenticationView.ts");
var HeaderView_1 = __webpack_require__(/*! ../header/HeaderView */ "./src/header/HeaderView.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ./ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/main.scss */ "./src/_style/style-sheets/main.scss");
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this, "ViewManager") || this;
        _this.initView();
        return _this;
    }
    ViewManager.prototype.initView = function () {
        this.headerView = new HeaderView_1.HeaderView();
        this.currentView = new AuthenticationView_1.AuthenticationView();
    };
    ViewManager.prototype.switchView = function (view, exitType, callback) {
        var _this = this;
        if (!exitType)
            exitType = ViewExitTypes_1.ViewExitTypes.DEFAULT;
        this.currentView.exitScene(exitType, function () {
            _this.currentView = new view();
            if (callback)
                callback();
        });
    };
    ViewManager.prototype.listNotificationInterests = function () {
        var notifications = [];
        notifications.push(" ");
        return notifications;
    };
    ViewManager.prototype.handleNotification = function (notification) {
        switch (notification.name) {
        }
    };
    return ViewManager;
}(CoreEntity_1.CoreEntity));
exports.ViewManager = ViewManager;


/***/ }),

/***/ "./src/header/HeaderComponent.ts":
/*!***************************************!*\
  !*** ./src/header/HeaderComponent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ViewComponent_1 = __webpack_require__(/*! ../core/ViewComponent */ "./src/core/ViewComponent.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/header-component.scss */ "./src/_style/style-sheets/header-component.scss");
// HTML
var template = __webpack_require__(/*! ../_view-templates/header-component.html */ "./src/_view-templates/header-component.html");
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(view, container) {
        var _this = _super.call(this, view, container) || this;
        _this.container.innerHTML = template;
        _this.enterScene();
        return _this;
    }
    HeaderComponent.prototype.registerEventListeners = function () {
    };
    HeaderComponent.prototype.unregisterEventListeners = function () {
    };
    HeaderComponent.prototype.enterScene = function () {
        this.registerEventListeners();
    };
    HeaderComponent.prototype.exitScene = function (exitType) {
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        console.info("Exit being called in authentication login view component");
        this.view.componentExited(this.name);
    };
    return HeaderComponent;
}(ViewComponent_1.ViewComponent));
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/header/HeaderView.ts":
/*!**********************************!*\
  !*** ./src/header/HeaderView.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var HeaderComponent_1 = __webpack_require__(/*! ./HeaderComponent */ "./src/header/HeaderComponent.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/header-view.scss */ "./src/_style/style-sheets/header-view.scss");
// HTML
var headerViewTemplate = __webpack_require__(/*! ../_view-templates/header-view.html */ "./src/_view-templates/header-view.html");
var HeaderView = /** @class */ (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView() {
        var _this = _super.call(this, "AuthenticationView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "header-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.HEADING_CONTAINER).appendChild(_this.container);
        _this.container.innerHTML = headerViewTemplate;
        _this.headerContainer = document.getElementById("header-component-container");
        _this.header = new HeaderComponent_1.HeaderComponent(_this, _this.headerContainer);
        _this.enterScene();
        return _this;
    }
    HeaderView.prototype.enterScene = function () {
    };
    HeaderView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.header.exitScene(exitType);
    };
    HeaderView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        return notifications;
    };
    HeaderView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            default:
                break;
        }
    };
    HeaderView.prototype.handleSignal = function (signal) {
        console.log("Signal received in " + this.NAME + ": " + signal.name);
        switch (signal.name) {
            default:
                break;
        }
    };
    return HeaderView;
}(View_1.View));
exports.HeaderView = HeaderView;


/***/ })

/******/ });
//# sourceMappingURL=output.js.map
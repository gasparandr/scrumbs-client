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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-forgot-password.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-forgot-password.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== HTML5 display definitions ==================================== */\n*, *::after, *::before {\n  box-sizing: border-box;\n  /* Remove background highlight on touch from mobile devices */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/** ==================================== Base ==================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\n/** ==================================== Links ==================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit;\n  text-decoration: none;\n  /** Improve readability when focused and also mouse hovered in all browsers */ }\n  a:link, a :visited, a :hover, a :active {\n    text-decoration: none;\n    outline: 0; }\n  a:hover {\n    cursor: pointer; }\n\n/** ==================================== Typography ==================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/** ==================================== Embedded content ==================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  /** Remove inner padding and search cancel button in Safari 5 and Chrome on OS X */ }\n  input[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"] ::-webkit-search-decoration {\n    -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/** ==================================== Tables ==================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/** ==================================== Clearfix ==================================== */\n.clearfix {\n  zoom: 1; }\n  .clearfix::before, .clearfix ::after {\n    content: \"\";\n    display: block; }\n  .clearfix::after {\n    clear: both;\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \".\";\n    height: 0; }\n\n/** ==================================== Inputs and buttons ==================================== */\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== Normal ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Regular.ttf */ "./src/_style/fonts/Muli-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Bold.ttf */ "./src/_style/fonts/Muli-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBold.ttf */ "./src/_style/fonts/Muli-SemiBold.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Light.ttf */ "./src/_style/fonts/Muli-Light.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal; }\n\n/** ==================================== Italic ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Italic.ttf */ "./src/_style/fonts/Muli-Italic.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBoldItalic.ttf */ "./src/_style/fonts/Muli-SemiBoldItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-LightItalic.ttf */ "./src/_style/fonts/Muli-LightItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: italic; }\n\n#authentication-forgot-password-container {\n  display: none;\n  position: absolute;\n  width: 410px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n  #authentication-forgot-password-container .logo {\n    display: block;\n    width: 160px;\n    height: 37px;\n    margin: 0 auto 30px; }\n  #authentication-forgot-password-container h2 {\n    max-width: none; }\n  #authentication-forgot-password-container .forgot-password-body {\n    max-width: 335px;\n    margin: 0 auto; }\n    #authentication-forgot-password-container .forgot-password-body .input-wrapper {\n      margin-top: 40px; }\n    #authentication-forgot-password-container .forgot-password-body .primary-button {\n      margin: 30px auto; }\n  #authentication-forgot-password-container .forgot-password-footer {\n    text-align: center; }\n    #authentication-forgot-password-container .forgot-password-footer span {\n      font-size: 0.86em; }\n    #authentication-forgot-password-container .forgot-password-footer span:not(.accent) {\n      color: #9B9AA9;\n      margin-right: 5px; }\n  @media screen and (max-width: 700px) {\n    #authentication-forgot-password-container .forgot-password-footer span {\n      display: block; }\n    #authentication-forgot-password-container .forgot-password-footer span:not(.accent) {\n      margin-right: 0;\n      margin-bottom: 10px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-log-in.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-log-in.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#authentication-log-in-container {\n  width: 370px;\n  margin: 0 auto;\n  padding-top: 57px; }\n  #authentication-log-in-container #forgot-password {\n    float: right;\n    font-size: 0.86em;\n    line-height: 23px; }\n  @media screen and (max-width: 560px) {\n    #authentication-log-in-container {\n      padding-top: 45px; } }\n  @media screen and (max-width: 480px) {\n    #authentication-log-in-container {\n      width: 100%;\n      padding-left: 40px;\n      padding-right: 40px; } }\n  @media screen and (max-width: 400px) {\n    #authentication-log-in-container {\n      padding-left: 20px;\n      padding-right: 20px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-sign-up.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-sign-up.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#authentication-sign-up-container {\n  display: none;\n  width: 370px;\n  margin: 0 auto;\n  padding-top: 57px; }\n  @media screen and (max-width: 560px) {\n    #authentication-sign-up-container {\n      padding-top: 45px; } }\n  @media screen and (max-width: 480px) {\n    #authentication-sign-up-container {\n      width: 100%;\n      padding-left: 40px;\n      padding-right: 40px; } }\n  @media screen and (max-width: 400px) {\n    #authentication-sign-up-container {\n      padding-left: 20px;\n      padding-right: 20px; } }\n", ""]);

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
exports.push([module.i, "/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== Normal ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Regular.ttf */ "./src/_style/fonts/Muli-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Bold.ttf */ "./src/_style/fonts/Muli-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBold.ttf */ "./src/_style/fonts/Muli-SemiBold.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Light.ttf */ "./src/_style/fonts/Muli-Light.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal; }\n\n/** ==================================== Italic ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Italic.ttf */ "./src/_style/fonts/Muli-Italic.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBoldItalic.ttf */ "./src/_style/fonts/Muli-SemiBoldItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-LightItalic.ttf */ "./src/_style/fonts/Muli-LightItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: italic; }\n\n/** ==================================== Authentication ==================================== */\n#authentication-view-container h1, #authentication-view-container h2 {\n  text-align: center;\n  margin: 0 auto; }\n\n#authentication-view-container h1 {\n  font-size: 1.85em;\n  font-weight: bold;\n  margin-bottom: 12px; }\n\n#authentication-view-container h2 {\n  max-width: 315px;\n  line-height: 1.6em;\n  color: #242E4C; }\n\n#authentication-view-container .input-wrapper {\n  margin-top: 25px; }\n\n#authentication-view-container .input-email ~ .input-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/icon-email.svg */ "./src/_style/img/icons/icon-email.svg")) + ");\n  width: 16px;\n  height: 12px; }\n\n#authentication-view-container .input-password ~ .input-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/icon-password.svg */ "./src/_style/img/icons/icon-password.svg")) + ");\n  width: 12px;\n  height: 16px; }\n\n#authentication-view-container .input-user ~ .input-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ../img/icons/icon-user.svg */ "./src/_style/img/icons/icon-user.svg")) + ");\n  width: 14px;\n  height: 15px; }\n\n#authentication-view-container .checkbox-wrapper {\n  margin: 35px 0; }\n\n#authentication-view-container .primary-button {\n  display: block;\n  width: 95%;\n  margin: 0 auto; }\n\n#authentication-view-container .social-media-auth-wrapper p {\n  text-align: center;\n  color: #9B9AA9;\n  font-size: 0.86em;\n  margin: 35px 0; }\n\n#authentication-view-container .social-media-auth-wrapper .social-media-auth-container {\n  height: 50px;\n  margin: 0 auto;\n  position: relative; }\n  #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a {\n    position: absolute;\n    display: block;\n    width: 28%;\n    height: 100%;\n    border-radius: 5px;\n    transition: all 0.2s linear; }\n    #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:hover {\n      box-shadow: 0 0 0 1px #E1E0E9; }\n    #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a::after {\n      content: \"\";\n      position: absolute;\n      width: 22px;\n      height: 22px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      -o-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain; }\n    #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(1) {\n      left: 0; }\n      #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(1)::after {\n        background-image: url(" + escape(__webpack_require__(/*! ../img/icons/google-icon.svg */ "./src/_style/img/icons/google-icon.svg")) + "); }\n    #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(2) {\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      -moz-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n      -o-transform: translateX(-50%);\n      transform: translateX(-50%); }\n      #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(2)::after {\n        background-image: url(" + escape(__webpack_require__(/*! ../img/icons/twitter-icon.svg */ "./src/_style/img/icons/twitter-icon.svg")) + "); }\n    #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(3) {\n      right: 0; }\n      #authentication-view-container .social-media-auth-wrapper .social-media-auth-container a:nth-child(3)::after {\n        background-image: url(" + escape(__webpack_require__(/*! ../img/icons/linked-in-icon.svg */ "./src/_style/img/icons/linked-in-icon.svg")) + "); }\n\n@media screen and (max-width: 480px) {\n  #authentication-view-container .primary-button {\n    width: 100%; } }\n", ""]);

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

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== Header ==================================== */\n#header-view-container {\n  background: #FFFFFF;\n  height: 70px;\n  padding-left: 30px;\n  padding-right: 37px;\n  position: relative;\n  z-index: 1000; }\n  #header-view-container #logo {\n    display: inline-block;\n    width: 120px;\n    height: 30px;\n    margin-top: 16px;\n    position: relative; }\n  #header-view-container .button-group {\n    position: absolute;\n    right: 37px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n    height: 50px; }\n  #header-view-container #header-button {\n    width: 152px;\n    margin-left: 30px; }\n  @media screen and (max-width: 560px) {\n    #header-view-container {\n      padding-left: 15px;\n      padding-right: 15px; }\n      #header-view-container .button-group {\n        right: 15px; }\n      #header-view-container #auth-message {\n        display: none; } }\n", ""]);

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
exports.push([module.i, "/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== HTML5 display definitions ==================================== */\n*, *::after, *::before {\n  box-sizing: border-box;\n  /* Remove background highlight on touch from mobile devices */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/** ==================================== Base ==================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\n/** ==================================== Links ==================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit;\n  text-decoration: none;\n  /** Improve readability when focused and also mouse hovered in all browsers */ }\n  a:link, a :visited, a :hover, a :active {\n    text-decoration: none;\n    outline: 0; }\n  a:hover {\n    cursor: pointer; }\n\n/** ==================================== Typography ==================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/** ==================================== Embedded content ==================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  /** Remove inner padding and search cancel button in Safari 5 and Chrome on OS X */ }\n  input[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"] ::-webkit-search-decoration {\n    -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/** ==================================== Tables ==================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/** ==================================== Clearfix ==================================== */\n.clearfix {\n  zoom: 1; }\n  .clearfix::before, .clearfix ::after {\n    content: \"\";\n    display: block; }\n  .clearfix::after {\n    clear: both;\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \".\";\n    height: 0; }\n\n/** ==================================== Inputs and buttons ==================================== */\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n/** Colors */\n/** Text Colors */\n/** Complementary colors */\n/**  Drop Shadows */\n/** ==================================== Normal ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Regular.ttf */ "./src/_style/fonts/Muli-Regular.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Bold.ttf */ "./src/_style/fonts/Muli-Bold.ttf")) + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBold.ttf */ "./src/_style/fonts/Muli-SemiBold.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Light.ttf */ "./src/_style/fonts/Muli-Light.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: normal; }\n\n/** ==================================== Italic ==================================== */\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-Italic.ttf */ "./src/_style/fonts/Muli-Italic.ttf")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-SemiBoldItalic.ttf */ "./src/_style/fonts/Muli-SemiBoldItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Muli\";\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Muli-LightItalic.ttf */ "./src/_style/fonts/Muli-LightItalic.ttf")) + ") format(\"truetype\");\n  font-weight: 300;\n  font-style: italic; }\n\n/** ==================================== Miscellaneous ==================================== */\n.logo {\n  background: url(" + escape(__webpack_require__(/*! ../img/icons/scrumbs-logo-colored.svg */ "./src/_style/img/icons/scrumbs-logo-colored.svg")) + ") no-repeat;\n  background-size: contain; }\n\n.accent {\n  color: #6390F6; }\n\n.pointer {\n  cursor: pointer; }\n\n.bold {\n  font-weight: bold; }\n\n.semibold {\n  font-weight: 600; }\n\n.light {\n  font-weight: 300; }\n\n.underline, a.underline {\n  text-decoration: underline; }\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/** ==================================== Body ==================================== */\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n  font-size: 14px; }\n\nbody {\n  font-family: Muli, Arial, Helvetica, sans-serif;\n  color: #242246;\n  background: #FFFFFF;\n  background: -moz-linear-gradient(top, #F6F6F9 0%, #FFFFFF 100%);\n  background: -webkit-linear-gradient(top, #F6F6F9 0%, #FFFFFF 100%);\n  background: linear-gradient(to bottom, #F6F6F9 0%, #FFFFFF 100%); }\n\n/** ==================================== Main Container ==================================== */\n#content-wrapper {\n  width: 80%;\n  height: calc( 100% - 95px);\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: 0; }\n\n#content-container {\n  height: 100%;\n  background-color: #FFFFFF;\n  border-radius: 5px 5px 0 0;\n  box-shadow: 0 2px 20px 0 #E1E0E9;\n  position: relative; }\n  #content-container::before {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: -5%;\n    width: 110%;\n    height: 105%;\n    background: url(" + escape(__webpack_require__(/*! ../img/icons/bg-shape.svg */ "./src/_style/img/icons/bg-shape.svg")) + ") no-repeat;\n    background-size: 100% 100%;\n    z-index: -1; }\n\n/** ==================================== Inputs ==================================== */\ninput, textarea {\n  color: #242E4C;\n  background-color: #FFFFFF; }\n\n::placeholder {\n  color: #9B9AA9;\n  opacity: 1; }\n\n:-ms-input-placeholder {\n  color: #9B9AA9; }\n\n::-ms-input-placeholder {\n  color: #9B9AA9; }\n\n.input-group {\n  position: relative; }\n  .input-group:not(:last-child) {\n    margin-bottom: 20px; }\n  .input-group .input-label {\n    display: block;\n    margin-bottom: 5px; }\n  .input-group .input-container {\n    height: 50px;\n    background-color: #FFFFFF;\n    box-shadow: inset 0 0 0 1px #E1E0E9;\n    border-radius: 5px;\n    margin-bottom: 4px;\n    position: relative; }\n  .input-group .input {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 0 20px 0 40px;\n    background-color: transparent;\n    color: #242E4C; }\n    .input-group .input:focus {\n      box-shadow: inset 0 0 0 1px #6390F6; }\n  .input-group .input-icon {\n    position: absolute;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain; }\n  .input-group .input-error {\n    font-size: 0.85em;\n    color: #D00262;\n    display: none; }\n  .input-group .input-container.error ~ .input-error {\n    display: unset; }\n\n/** ==================================== Checkbox ==================================== */\n.checkbox-group {\n  display: inline-block;\n  position: relative; }\n  .checkbox-group .checkbox {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #E1E0E9;\n    border-radius: 3px; }\n  .checkbox-group label {\n    color: #9B9AA9;\n    font-size: 0.86em;\n    line-height: 23px;\n    padding-left: 28px;\n    background-color: white; }\n    .checkbox-group label::before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 20px;\n      height: 20px;\n      border: 1px solid #E1E0E9;\n      border-radius: 3px; }\n  .checkbox-group input:checked + label::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: grey;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n    left: 6px;\n    border-radius: 3px; }\n\n/** ==================================== Buttons ==================================== */\n.primary-button {\n  display: inline-block;\n  border-radius: 5px;\n  border: none;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 0.97em;\n  height: 50px;\n  line-height: 51px;\n  box-shadow: 0 12px 8px -9px #d0d4ff;\n  background: #FFFFFF;\n  background: -moz-linear-gradient(left, #6CB7FF 0%, #7985FF 100%);\n  background: -webkit-linear-gradient(left, #6CB7FF 0%, #7985FF 100%);\n  background: linear-gradient(to right, #6CB7FF 0%, #7985FF 100%);\n  transition: all 0.1s ease-out; }\n  .primary-button:active {\n    box-shadow: 0 1px 1px 0 #d0d4ff; }\n\n@media screen and (max-width: 560px) {\n  #content-wrapper {\n    width: 95%;\n    height: calc( 100% - 85px); } }\n", ""]);

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

/***/ "./src/_style/fonts/Muli-Bold.ttf":
/*!****************************************!*\
  !*** ./src/_style/fonts/Muli-Bold.ttf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-Bold.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-Italic.ttf":
/*!******************************************!*\
  !*** ./src/_style/fonts/Muli-Italic.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-Italic.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-Light.ttf":
/*!*****************************************!*\
  !*** ./src/_style/fonts/Muli-Light.ttf ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-Light.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-LightItalic.ttf":
/*!***********************************************!*\
  !*** ./src/_style/fonts/Muli-LightItalic.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-LightItalic.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/_style/fonts/Muli-Regular.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-Regular.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-SemiBold.ttf":
/*!********************************************!*\
  !*** ./src/_style/fonts/Muli-SemiBold.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-SemiBold.ttf";

/***/ }),

/***/ "./src/_style/fonts/Muli-SemiBoldItalic.ttf":
/*!**************************************************!*\
  !*** ./src/_style/fonts/Muli-SemiBoldItalic.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./fonts/Muli-SemiBoldItalic.ttf";

/***/ }),

/***/ "./src/_style/img/icons/bg-shape.svg":
/*!*******************************************!*\
  !*** ./src/_style/img/icons/bg-shape.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/bg-shape.svg";

/***/ }),

/***/ "./src/_style/img/icons/google-icon.svg":
/*!**********************************************!*\
  !*** ./src/_style/img/icons/google-icon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/google-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/icon-email.svg":
/*!*********************************************!*\
  !*** ./src/_style/img/icons/icon-email.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/icon-email.svg";

/***/ }),

/***/ "./src/_style/img/icons/icon-password.svg":
/*!************************************************!*\
  !*** ./src/_style/img/icons/icon-password.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/icon-password.svg";

/***/ }),

/***/ "./src/_style/img/icons/icon-user.svg":
/*!********************************************!*\
  !*** ./src/_style/img/icons/icon-user.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/icon-user.svg";

/***/ }),

/***/ "./src/_style/img/icons/linked-in-icon.svg":
/*!*************************************************!*\
  !*** ./src/_style/img/icons/linked-in-icon.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/linked-in-icon.svg";

/***/ }),

/***/ "./src/_style/img/icons/scrumbs-logo-colored.svg":
/*!*******************************************************!*\
  !*** ./src/_style/img/icons/scrumbs-logo-colored.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/scrumbs-logo-colored.svg";

/***/ }),

/***/ "./src/_style/img/icons/twitter-icon.svg":
/*!***********************************************!*\
  !*** ./src/_style/img/icons/twitter-icon.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./img/twitter-icon.svg";

/***/ }),

/***/ "./src/_style/style-sheets/authentication-forgot-password.scss":
/*!*********************************************************************!*\
  !*** ./src/_style/style-sheets/authentication-forgot-password.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./authentication-forgot-password.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-forgot-password.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

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

/***/ "./src/_style/style-sheets/authentication-sign-up.scss":
/*!*************************************************************!*\
  !*** ./src/_style/style-sheets/authentication-sign-up.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./authentication-sign-up.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/authentication-sign-up.scss");
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

/***/ "./src/_view-templates/authentication-forgot-password.html":
/*!*****************************************************************!*\
  !*** ./src/_view-templates/authentication-forgot-password.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<span class=\"logo\"></span>\r\n\r\n<h1>Forgot yout password?</h1>\r\n\r\n<h2>Don't worry, we got your back. Enter the email address you used when you joined, and we'll send you a password reset link</h2>\r\n\r\n<div class=\"forgot-password-body\">\r\n\r\n        <div class=\"input-wrapper\">\r\n\r\n            <div class=\"input-group\">\r\n        \r\n                <label class=\"input-label\" for=\"input-email-forgot-password\">Email</label>\r\n        \r\n                <div class=\"input-container input-type-text\">\r\n        \r\n                    <input id=\"input-email-forgot-password\" type=\"text\" class=\"input input-email\" placeholder=\"Enter your email address\" spellcheck=\"false\">\r\n        \r\n                    <span class=\"input-icon\"></span>\r\n        \r\n                </div>\r\n        \r\n                <span class=\"input-error\">Some error message</span>\r\n        \r\n            </div>\r\n            <!-- email -->\r\n                \r\n        </div>\r\n            \r\n        <button id=\"request-reset-link\" class=\"primary-button\">Request Reset Link</button>\r\n\r\n        <div class=\"forgot-password-footer\">\r\n\r\n            <span>Did you remember your password?</span>\r\n\r\n            <span id=\"try-logging-in\" class=\"accent underline pointer noselect\">Try logging in</span>\r\n\r\n        </div>\r\n\r\n        \r\n\r\n</div>\r\n\r\n";

/***/ }),

/***/ "./src/_view-templates/authentication-log-in.html":
/*!********************************************************!*\
  !*** ./src/_view-templates/authentication-log-in.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"authentication-title\">Log in to your account</h1>\r\n\r\n<h2 class=\"authentication-description\">Enter your email and password here and you'll be on your way</h2>\r\n\r\n<div class=\"input-wrapper\">\r\n\r\n    <div class=\"input-group\">\r\n\r\n        <label class=\"input-label\" for=\"input-email-login\">Email</label>\r\n\r\n        <div class=\"input-container input-type-text\">\r\n\r\n            <input id=\"input-email-login\" type=\"text\" class=\"input input-email\" placeholder=\"Enter your email address\" spellcheck=\"false\">\r\n\r\n            <span class=\"input-icon\"></span>\r\n\r\n        </div>\r\n\r\n        <span class=\"input-error\">Some error message</span>\r\n\r\n    </div>\r\n    <!-- email -->\r\n\r\n    <div class=\"input-group\">\r\n\r\n            <label class=\"input-label\" for=\"input-password-login\">Password</label>\r\n\r\n            <div class=\"input-container input-type-password\">\r\n\r\n                <input id=\"input-password-login\" type=\"text\" class=\"input input-password\" placeholder=\"5+ characters\" spellcheck=\"false\">\r\n\r\n                <span class=\"input-icon\"></span>\r\n\r\n            </div>\r\n\r\n            <span class=\"input-error\">Some error message</span>\r\n\r\n    </div>\r\n    <!-- password -->\r\n\r\n</div>\r\n\r\n\r\n<div class=\"authentication-footer\">\r\n\r\n    <div class=\"checkbox-wrapper\">\r\n\r\n        <div class=\"checkbox-group\">\r\n            <input id=\"remember-me\" type=\"checkbox\">\r\n            <label for=\"remember-me\" class=\"noselect pointer\">Remember Me</label>\r\n        </div>\r\n        \r\n        <p id=\"forgot-password\" class=\"accent pointer noselect\">Forgot Password?</p>\r\n\r\n    </div>\r\n\r\n    <button id=\"log-in\" class=\"primary-button\">Log In</button>\r\n\r\n    <div class=\"social-media-auth-wrapper\">\r\n\r\n        <p>Or log in with:</p>\r\n\r\n        <div class=\"social-media-auth-container\">\r\n\r\n            <a href=\"#\" class=\"button-google\"></a>\r\n            <a href=\"#\" class=\"button-twitter\"></a>\r\n            <a href=\"#\" class=\"button-linkedin\"></a>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/authentication-sign-up.html":
/*!*********************************************************!*\
  !*** ./src/_view-templates/authentication-sign-up.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"authentication-title\">Create your account</h1>\r\n\r\n<h2 class=\"authentication-description\">Enter your accout details below and you'll be on your way</h2>\r\n\r\n<div class=\"input-wrapper\">\r\n\r\n        <div class=\"input-group input-type-text\">\r\n\r\n            <label class=\"input-label\" for=\"input-name-signup\">Name</label>\r\n\r\n            <div class=\"input-container input-text\">\r\n\r\n                <input id=\"input-name-signup\" type=\"text\" class=\"input input-user\" placeholder=\"Enter your full name\" spellcheck=\"false\">\r\n\r\n                <span class=\"input-icon\"></span>\r\n\r\n            </div>\r\n\r\n            <span class=\"input-error\">Some error message</span>\r\n\r\n        </div>\r\n        <!-- name -->\r\n\r\n        <div class=\"input-group input-type-text\">\r\n\r\n                <label class=\"input-label\" for=\"input-email-signup\">Email</label>\r\n\r\n                <div class=\"input-container\">\r\n\r\n                    <input id=\"input-email-signup\" type=\"text\" class=\"input input-email\" placeholder=\"Enter your email address\" spellcheck=\"false\">\r\n\r\n                    <span class=\"input-icon\"></span>\r\n\r\n                </div>\r\n\r\n                <span class=\"input-error\">Some error message</span>\r\n\r\n        </div>\r\n        <!-- email -->\r\n\r\n        <div class=\"input-group\">\r\n\r\n                <label class=\"input-label\" for=\"input-password-signup\">Password</label>\r\n\r\n                <div class=\"input-container input-type-password\">\r\n\r\n                    <input id=\"input-password-signup\" type=\"text\" class=\"input input-password\" placeholder=\"5+ characters\" spellcheck=\"false\">\r\n\r\n                    <span class=\"input-icon\"></span>\r\n\r\n                </div>\r\n\r\n                <span class=\"input-error\">Some error message</span>\r\n\r\n        </div>\r\n        <!-- password -->\r\n\r\n</div>\r\n\r\n<div class=\"authentication-footer\">\r\n\r\n        <div class=\"checkbox-wrapper\">\r\n    \r\n            <div class=\"checkbox-group\">\r\n                <input id=\"agree-terms\" type=\"checkbox\">\r\n                <label for=\"agree-terms\" class=\"noselect pointer\">I agree to Scrumbs' <a href=\"#\" class=\"accent underline\">Terms of Service</a></label>\r\n            </div>\r\n    \r\n        </div>\r\n\r\n        <button id=\"sing-up\" class=\"primary-button\">Sign Up</button>\r\n\r\n        <div class=\"social-media-auth-wrapper\">\r\n\r\n                <p>Or sign up with:</p>\r\n        \r\n                <div class=\"social-media-auth-container\">\r\n\r\n                    <a href=\"#\" class=\"button-google\"></a>\r\n                    <a href=\"#\" class=\"button-twitter\"></a>\r\n                    <a href=\"#\" class=\"button-linkedin\"></a>\r\n\r\n                </div>\r\n        \r\n        </div>\r\n    \r\n</div>";

/***/ }),

/***/ "./src/_view-templates/authentication-view.html":
/*!******************************************************!*\
  !*** ./src/_view-templates/authentication-view.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"authentication-log-in-container\"></div>\r\n\r\n\r\n<div id=\"authentication-sign-up-container\"></div>\r\n\r\n\r\n<div id=\"authentication-forgot-password-container\"></div>";

/***/ }),

/***/ "./src/_view-templates/header-component.html":
/*!***************************************************!*\
  !*** ./src/_view-templates/header-component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<span id=\"logo\" class=\"logo\"></span>\r\n\r\n<div class=\"button-group\">\r\n\r\n    <span class=\"\" id=\"auth-message\">Don't have an account?</span>\r\n\r\n    <button id=\"header-button\" class=\"primary-button\">Sign Up</button>\r\n\r\n</div>";

/***/ }),

/***/ "./src/_view-templates/header-view.html":
/*!**********************************************!*\
  !*** ./src/_view-templates/header-view.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"header-component-container\"></div>";

/***/ }),

/***/ "./src/authentication/AuthenticationForgotPassword.ts":
/*!************************************************************!*\
  !*** ./src/authentication/AuthenticationForgotPassword.ts ***!
  \************************************************************/
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
__webpack_require__(/*! ../_style/style-sheets/authentication-forgot-password.scss */ "./src/_style/style-sheets/authentication-forgot-password.scss");
var ViewEnterTypes_1 = __webpack_require__(/*! ../core/ViewEnterTypes */ "./src/core/ViewEnterTypes.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
// HTML
var template = __webpack_require__(/*! ../_view-templates/authentication-forgot-password.html */ "./src/_view-templates/authentication-forgot-password.html");
var AuthenticationForgotPassword = /** @class */ (function (_super) {
    __extends(AuthenticationForgotPassword, _super);
    function AuthenticationForgotPassword(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Login view component initialized.");
        _this.container.innerHTML = template;
        _this.title = document.getElementById("");
        _this.subTitle = document.getElementById("");
        _this.emailInputLabel = document.getElementById("");
        _this.emailInput = document.getElementById("input-email-forgot-password");
        _this.emailInputError = document.getElementById("");
        _this.tryLoggingInBtn = document.getElementById("try-logging-in");
        _this.tryLoggingInBtnListener = _this.tryLoggingInBtnListener.bind(_this);
        _this.enterScene();
        return _this;
    }
    AuthenticationForgotPassword.prototype.registerEventListeners = function () {
        this.tryLoggingInBtn.addEventListener("click", this.tryLoggingInBtnListener);
    };
    AuthenticationForgotPassword.prototype.unregisterEventListeners = function () {
        this.tryLoggingInBtn.addEventListener("click", this.tryLoggingInBtnListener);
    };
    AuthenticationForgotPassword.prototype.tryLoggingInBtnListener = function (e) {
        this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.TRY_LOGGING_IN);
    };
    AuthenticationForgotPassword.prototype.enterScene = function (enterType) {
        if (enterType === ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT) {
            this.container.style.display = "block";
            console.log("Authentication forgot password view component enter scene");
        }
        else {
            this.registerEventListeners();
        }
    };
    AuthenticationForgotPassword.prototype.exitScene = function (exitType) {
        console.info("Exit being called in authentication forgot password view component");
        if (exitType === ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT) {
            this.container.style.display = "none";
        }
        else {
            _super.prototype.exitScene.call(this, exitType);
            this.unregisterEventListeners();
            this.view.componentExited(this.name);
        }
    };
    return AuthenticationForgotPassword;
}(ViewComponent_1.ViewComponent));
exports.AuthenticationForgotPassword = AuthenticationForgotPassword;


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
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var ViewEnterTypes_1 = __webpack_require__(/*! ../core/ViewEnterTypes */ "./src/core/ViewEnterTypes.ts");
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
// HTML
var template = __webpack_require__(/*! ../_view-templates/authentication-log-in.html */ "./src/_view-templates/authentication-log-in.html");
var AuthenticationLogin = /** @class */ (function (_super) {
    __extends(AuthenticationLogin, _super);
    function AuthenticationLogin(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Login view component initialized.");
        _this.container.innerHTML = template;
        _this.title = document.getElementById("");
        _this.subTitle = document.getElementById("");
        _this.emailInputLabel = document.getElementById("");
        _this.emailInput = document.getElementById("");
        _this.emailInputError = document.getElementById("");
        _this.passwordInputLabel = document.getElementById("");
        _this.passwordInput = document.getElementById("");
        _this.passwordInputError = document.getElementById("");
        _this.forgotPassBtn = document.getElementById("forgot-password");
        _this.forgotPassBtnListener = _this.forgotPassBtnListener.bind(_this);
        _this.enterScene();
        return _this;
    }
    AuthenticationLogin.prototype.registerEventListeners = function () {
        this.forgotPassBtn.addEventListener("click", this.forgotPassBtnListener);
    };
    AuthenticationLogin.prototype.unregisterEventListeners = function () {
        this.forgotPassBtn.removeEventListener("click", this.forgotPassBtnListener);
    };
    AuthenticationLogin.prototype.forgotPassBtnListener = function (e) {
        this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.FORGOT_PASSWORD);
    };
    AuthenticationLogin.prototype.enterScene = function (enterType) {
        if (enterType === ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT) {
            this.container.style.display = "block";
            console.log("Authentication login view component enter scene");
        }
        else {
            this.registerEventListeners();
        }
    };
    AuthenticationLogin.prototype.exitScene = function (exitType) {
        console.info("Exit being called in authentication login view component");
        if (exitType === ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT) {
            this.container.style.display = "none";
        }
        else {
            _super.prototype.exitScene.call(this, exitType);
            this.unregisterEventListeners();
            this.view.componentExited(this.name);
        }
    };
    return AuthenticationLogin;
}(ViewComponent_1.ViewComponent));
exports.AuthenticationLogin = AuthenticationLogin;


/***/ }),

/***/ "./src/authentication/AuthenticationNotifications.ts":
/*!***********************************************************!*\
  !*** ./src/authentication/AuthenticationNotifications.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var AuthenticationNotifications = /** @class */ (function () {
    function AuthenticationNotifications() {
    }
    AuthenticationNotifications.FORGOT_PASSWORD = "FORGOT_PASSWORD";
    AuthenticationNotifications.TRY_LOGGING_IN = "TRY_LOGGING_IN";
    return AuthenticationNotifications;
}());
exports.AuthenticationNotifications = AuthenticationNotifications;


/***/ }),

/***/ "./src/authentication/AuthenticationSignUp.ts":
/*!****************************************************!*\
  !*** ./src/authentication/AuthenticationSignUp.ts ***!
  \****************************************************/
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
__webpack_require__(/*! ../_style/style-sheets/authentication-sign-up.scss */ "./src/_style/style-sheets/authentication-sign-up.scss");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var ViewEnterTypes_1 = __webpack_require__(/*! ../core/ViewEnterTypes */ "./src/core/ViewEnterTypes.ts");
// HTML
var template = __webpack_require__(/*! ../_view-templates/authentication-sign-up.html */ "./src/_view-templates/authentication-sign-up.html");
var AuthenticationSignUp = /** @class */ (function (_super) {
    __extends(AuthenticationSignUp, _super);
    function AuthenticationSignUp(view, container) {
        var _this = _super.call(this, view, container) || this;
        _this.container.innerHTML = template;
        _this.title = document.getElementById("");
        _this.subTitle = document.getElementById("");
        _this.nameInputLabel = document.getElementById("");
        _this.nameInput = document.getElementById("");
        _this.nameInputError = document.getElementById("");
        _this.emailInputLabel = document.getElementById("");
        _this.emailInput = document.getElementById("");
        _this.emailInputError = document.getElementById("");
        _this.passwordInputLabel = document.getElementById("");
        _this.passwordInput = document.getElementById("");
        _this.passwordInputError = document.getElementById("");
        return _this;
    }
    AuthenticationSignUp.prototype.registerEventListeners = function () {
    };
    AuthenticationSignUp.prototype.unregisterEventListeners = function () {
    };
    AuthenticationSignUp.prototype.enterScene = function (enterType) {
        if (enterType === ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT) {
            this.container.style.display = "block";
            console.log("Authentication login view component enter scene");
        }
        else {
            this.registerEventListeners();
        }
    };
    AuthenticationSignUp.prototype.exitScene = function (exitType) {
        console.info("Exit being called in authentication login view component");
        if (exitType === ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT) {
            this.container.style.display = "none";
        }
        else {
            _super.prototype.exitScene.call(this, exitType);
            this.unregisterEventListeners();
            this.view.componentExited(this.name);
        }
    };
    return AuthenticationSignUp;
}(ViewComponent_1.ViewComponent));
exports.AuthenticationSignUp = AuthenticationSignUp;


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
var AuthenticationSignUp_1 = __webpack_require__(/*! ./AuthenticationSignUp */ "./src/authentication/AuthenticationSignUp.ts");
var AuthenticationForgotPassword_1 = __webpack_require__(/*! ./AuthenticationForgotPassword */ "./src/authentication/AuthenticationForgotPassword.ts");
var HeaderNotifications_1 = __webpack_require__(/*! ../header/HeaderNotifications */ "./src/header/HeaderNotifications.ts");
var AuthenticationNotifications_1 = __webpack_require__(/*! ./AuthenticationNotifications */ "./src/authentication/AuthenticationNotifications.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ../core/ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var ViewEnterTypes_1 = __webpack_require__(/*! ../core/ViewEnterTypes */ "./src/core/ViewEnterTypes.ts");
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
        _this.authenticationForgotPasswordContainer = document.getElementById("authentication-forgot-password-container");
        _this.authenticationLogin = new AuthenticationLogin_1.AuthenticationLogin(_this, _this.authenticationLoginContainer);
        _this.authenticationSignUp = new AuthenticationSignUp_1.AuthenticationSignUp(_this, _this.authenticationSignUpContainer);
        _this.authenticationForgotPassword = new AuthenticationForgotPassword_1.AuthenticationForgotPassword(_this, _this.authenticationForgotPasswordContainer);
        _this.enterScene();
        return _this;
    }
    AuthenticationView.prototype.enterScene = function () {
    };
    AuthenticationView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.authenticationLogin.exitScene(exitType);
        this.authenticationSignUp.exitScene(exitType);
        this.authenticationForgotPassword.exitScene(exitType);
    };
    AuthenticationView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SIGN_UP);
        notifications.push(HeaderNotifications_1.HeaderNotifications.LOG_IN);
        notifications.push(AuthenticationNotifications_1.AuthenticationNotifications.FORGOT_PASSWORD);
        return notifications;
    };
    AuthenticationView.prototype.handleNotification = function (notification) {
        console.log("Notification received in " + this.NAME + ": " + notification.name);
        switch (notification.name) {
            case HeaderNotifications_1.HeaderNotifications.SIGN_UP:
                this.authenticationLogin.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationForgotPassword.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationSignUp.enterScene(ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT);
                break;
            case HeaderNotifications_1.HeaderNotifications.LOG_IN:
                this.authenticationSignUp.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationForgotPassword.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationLogin.enterScene(ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT);
                break;
            default:
                break;
        }
    };
    AuthenticationView.prototype.handleSignal = function (signal) {
        console.log("Signal received in " + this.NAME + ": " + signal.name);
        switch (signal.name) {
            case AuthenticationNotifications_1.AuthenticationNotifications.FORGOT_PASSWORD:
                this.authenticationLogin.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationSignUp.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationForgotPassword.enterScene(ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT);
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.TRY_LOGGING_IN:
                this.authenticationSignUp.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationForgotPassword.exitScene(ViewExitTypes_1.ViewExitTypes.SWITCH_COMPONENT);
                this.authenticationLogin.enterScene(ViewEnterTypes_1.ViewEnterTypes.SWITCH_COMPONENT);
                break;
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
    ViewComponent.prototype.enterScene = function (enterType) {
    };
    ViewComponent.prototype.exitScene = function (exitType) {
        if (this.connection)
            this.connection.unregister();
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ "./src/core/ViewEnterTypes.ts":
/*!************************************!*\
  !*** ./src/core/ViewEnterTypes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewEnterTypes = /** @class */ (function () {
    function ViewEnterTypes() {
    }
    ViewEnterTypes.DEFAULT = "DEFAULT";
    ViewEnterTypes.SWITCH = "SWITCH";
    ViewEnterTypes.SWITCH_COMPONENT = "SWITCH_COMPONENT";
    return ViewEnterTypes;
}());
exports.ViewEnterTypes = ViewEnterTypes;


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
    ViewExitTypes.SWITCH_COMPONENT = "SWITCH_COMPONENT";
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
var HeaderNotifications_1 = __webpack_require__(/*! ./HeaderNotifications */ "./src/header/HeaderNotifications.ts");
// HTML
var template = __webpack_require__(/*! ../_view-templates/header-component.html */ "./src/_view-templates/header-component.html");
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(view, container) {
        var _this = _super.call(this, view, container) || this;
        _this.container.innerHTML = template;
        _this.authViewComponentActive = "LOGIN";
        _this.actionBtn = document.getElementById("header-button");
        _this.authMessage = document.getElementById("auth-message");
        _this.actionBtnClickListener = _this.actionBtnClickListener.bind(_this);
        _this.enterScene();
        return _this;
    }
    HeaderComponent.prototype.registerEventListeners = function () {
        this.actionBtn.addEventListener("click", this.actionBtnClickListener);
    };
    HeaderComponent.prototype.unregisterEventListeners = function () {
        this.actionBtn.removeEventListener("click", this.actionBtnClickListener);
    };
    HeaderComponent.prototype.actionBtnClickListener = function (e) {
        if (this.authViewComponentActive === "LOGIN") {
            this.sendSignal(HeaderNotifications_1.HeaderNotifications.SIGN_UP);
            this.actionBtn.innerHTML = "Log In";
            this.authMessage.innerHTML = "Already have an account?";
            this.authViewComponentActive = "SIGNUP";
        }
        else {
            this.sendSignal(HeaderNotifications_1.HeaderNotifications.LOG_IN);
            this.actionBtn.innerHTML = "Sign Up";
            this.authMessage.innerHTML = "Don't have an account?";
            this.authViewComponentActive = "LOGIN";
        }
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

/***/ "./src/header/HeaderNotifications.ts":
/*!*******************************************!*\
  !*** ./src/header/HeaderNotifications.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HeaderNotifications = /** @class */ (function () {
    function HeaderNotifications() {
    }
    HeaderNotifications.SIGN_UP = "SIGN_UP";
    HeaderNotifications.LOG_IN = "LOG_IN";
    return HeaderNotifications;
}());
exports.HeaderNotifications = HeaderNotifications;


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
var HeaderNotifications_1 = __webpack_require__(/*! ./HeaderNotifications */ "./src/header/HeaderNotifications.ts");
// HTML
var headerViewTemplate = __webpack_require__(/*! ../_view-templates/header-view.html */ "./src/_view-templates/header-view.html");
var HeaderView = /** @class */ (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView() {
        var _this = _super.call(this, "HeaderView") || this;
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
            case HeaderNotifications_1.HeaderNotifications.SIGN_UP:
                this.sendNotification(HeaderNotifications_1.HeaderNotifications.SIGN_UP);
                break;
            case HeaderNotifications_1.HeaderNotifications.LOG_IN:
                this.sendNotification(HeaderNotifications_1.HeaderNotifications.LOG_IN);
                break;
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
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./02 - multiple fields/02.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./02 - multiple fields/02.css":
/*!*************************************!*\
  !*** ./02 - multiple fields/02.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./02_-_multiple_fields/02.css?");

/***/ }),

/***/ "./02 - multiple fields/02.jsx":
/*!*************************************!*\
  !*** ./02 - multiple fields/02.jsx ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _02_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02.css */ \"./02 - multiple fields/02.css\");\n/* harmony import */ var _02_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_02_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\r\n * Tutorial 02 - Multiple Fields\r\n *\r\n * Check out the README in this folder for details\r\n */\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('my/tut-02', {\n  title: '02 - Multiple Fields',\n  icon: 'book',\n  category: 'layout',\n  example: {},\n  attributes: {\n    // Extract title from <h2>\n    title: {\n      type: 'array',\n      source: 'children',\n      selector: 'h2'\n    },\n    // since there's no source, this attribute will be saved as JSON comment like this:\n    // <!-- { mediaID: 10 } -->\n    mediaID: {\n      type: 'number'\n    },\n    // Extract mediaURL from the `src` attribute of <img>\n    mediaURL: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'img',\n      attribute: 'src'\n    },\n    // Extract ingredients from the children of class `ingredients`\n    ingredients: {\n      type: 'array',\n      source: 'children',\n      selector: '.ingredients'\n    },\n    steps: {\n      type: 'array',\n      source: 'children',\n      selector: '.steps'\n    }\n  },\n  // Define how to render the content in Editor\n  edit: function edit(props) {\n    var atts = props.attributes;\n    /**\r\n     * First, imagine how you want the HTML output to be.\r\n     *\r\n     * For this tutorial, we want it like this:\r\n     *\r\n     *   <div class=\"wp-block-my-tut02\">\r\n     *     <h2> Title </h2>\r\n     *     <figure> <img /> </figure>\r\n     *     <h3> Ingredients </h3>\r\n     *     <ul>\r\n     *       <li> ... </li>\r\n     *       <li> ... </li>\r\n     *     </ul>\r\n     *     <h3> Steps </h3>\r\n     *     <div>\r\n     *       <p> ... </p>\r\n     *       <p> ... </p>\r\n     *     </div>\r\n     *   </div>\r\n     *\r\n     * Now we need to translate it to React:\r\n     */\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: props.className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n      tagName: \"h2\",\n      inline: \"true\",\n      placeholder: \"Write Recipe title\\u2026\",\n      value: atts.title,\n      onChange: function onChange(value) {\n        props.setAttributes({\n          title: value\n        });\n      }\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"figure\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"MediaUpload\"], {\n      allowedTypes: \"image\",\n      value: atts.mediaID,\n      onSelect: function onSelect(media) {\n        props.setAttributes({\n          mediaURL: media.url,\n          mediaID: media.id\n        });\n      } // Create a button that opens media library when clicked\n      ,\n      render: function render(obj) {\n        var className = atts.mediaID ? 'button button--transparent' : 'button'; // If Image ID exists, show <img>, otherwise show a text to upload imge.\n\n        var buttonContent = atts.mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n          src: atts.mediaURL,\n          alt: \"\"\n        }) : 'Upload Image';\n        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          className: className,\n          onClick: obj.open\n        }, buttonContent);\n      }\n    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \" Ingredients \"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n      tagName: \"ul\",\n      multiline: \"li\",\n      className: \"ingredients\",\n      placeholder: \"Write a list of ingredients\\u2026\",\n      value: atts.ingredients,\n      onChange: function onChange(value) {\n        props.setAttributes({\n          ingredients: value\n        });\n      }\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \" Steps \"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n      tagName: \"div\",\n      multiline: \"p\",\n      inline: \"false\",\n      placeholder: \"Write instructions\\u2026\",\n      value: atts.steps,\n      onChange: function onChange(value) {\n        props.setAttributes({\n          steps: value\n        });\n      }\n    }));\n  },\n  // Define what to save in Database\n  // This saved HTML will be used for extracting the attributes\n  save: function save(props) {\n    var atts = props.attributes;\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].Content, {\n      tagName: \"h2\",\n      value: atts.title\n    }), atts.mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"figure\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n      src: atts.mediaURL,\n      alt: \"\"\n    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \" Ingredients \"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].Content, {\n      tagName: \"ul\",\n      className: \"ingredients\",\n      value: atts.ingredients\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \" Instructions \"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].Content, {\n      tagName: \"div\",\n      className: \"steps\",\n      value: atts.steps\n    }));\n  }\n});\n/**\r\n* That's all folks!\r\n* If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/gutenberg-tutorial/issues\r\n*/\n\n//# sourceURL=webpack:///./02_-_multiple_fields/02.jsx?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blockEditor%22%5D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blocks%22%5D?");

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22components%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");

/***/ })

/******/ });
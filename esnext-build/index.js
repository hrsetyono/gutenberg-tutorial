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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esnext-src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./01 - single field/01-esnext.js":
/*!****************************************!*\
  !*** ./01 - single field/01-esnext.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _01_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01.css */ "./01 - single field/01.css");
/* harmony import */ var _01_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_01_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Tutorial 01 - Single Field
 * 
 * Check out the README in this folder for details
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-01', {
  title: '01 - Single Field',
  icon: 'book',
  category: 'layout',
  // Attribute is a value that you can pass on to HTML markup. It automatically gets updated when the value changes.
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      // if an attribute has 'source', it will extract the value from saved HTML markup
      selector: 'p' // take the chilren of 'p'

    }
  },
  // This value will be used for Preview when selecting block
  example: {
    attributes: {
      content: 'Hello world'
    }
  },
  // Define how to render the content in Editor
  edit: function edit(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "p",
      className: props.className,
      value: atts.content // Listener when the RichText is changed.
      ,
      onChange: function onChange(value) {
        // Changing value using setAttributes() will update all reference of atts.content
        props.setAttributes({
          content: value
        });
      }
    });
  },
  // Define what to save in Database
  save: function save(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "p",
      value: atts.content
    });
  }
});

/***/ }),

/***/ "./01 - single field/01.css":
/*!**********************************!*\
  !*** ./01 - single field/01.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./02 - multiple fields/02-esnext.js":
/*!*******************************************!*\
  !*** ./02 - multiple fields/02-esnext.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _02_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02.css */ "./02 - multiple fields/02.css");
/* harmony import */ var _02_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_02_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Tutorial 02 - Multiple Fields
 * 
 * Check out the README in this folder for details
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-02', {
  title: '02 - Multiple Fields',
  icon: 'book',
  category: 'layout',
  attributes: {
    // Extract title from <h2>
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    // since there's no source, this attribute will be saved as JSON comment like this:
    // <!-- { mediaID: 10 } -->
    mediaID: {
      type: 'number'
    },
    // Extract mediaURL from the `src` attribute of <img>
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    // Extract ingredients from the children of class `ingredients`
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients'
    },
    steps: {
      type: 'array',
      source: 'children',
      selector: '.steps'
    }
  },
  // This value will be used for Preview when selecting block
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: ['flour', 'sugar', 'chocolate'],
      steps: ['Mix', 'Bake', 'Enjoy']
    }
  },
  // Define how to render the content in Editor
  edit: function edit(props) {
    var atts = props.attributes;
    /**
     * First, imagine how you want the HTML output to be.
     * 
     * For this tutorial, we want it like this:
     * 
     *   <div class="wp-block-my-tut02">
     *     <h2> Title </h2>
     *     <figure> <img /> </figure>
     *     <h3> Ingredients </h3>
     *     <ul>
     *       <li> ... </li>
     *       <li> ... </li>
     *     </ul>
     *     <h3> Steps </h3>
     *     <div>
     *       <p> ... </p>
     *       <p> ... </p>
     *     </div>
     *   </div>
     * 
     * Now we need to translate it to React:
     */

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "h2",
      inline: "true",
      placeholder: "Write Recipe title\u2026",
      value: atts.title,
      onChange: function onChange(value) {
        props.setAttributes({
          title: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      allowedTypes: "image",
      value: atts.mediaID,
      onSelect: function onSelect(media) {
        props.setAttributes({
          mediaURL: media.url,
          mediaID: media.id
        });
      } // Create a button that opens media library when clicked
      ,
      render: function render(obj) {
        var className = atts.mediaID ? 'button button--transparent' : 'button'; // If Image ID exists, show <img>, otherwise show a text to upload imge.

        var buttonContent = atts.mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: atts.mediaURL
        }) : 'Upload Image';
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: className,
          onClick: obj.open
        }, buttonContent);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      className: "ingredients",
      placeholder: "Write a list of ingredients\u2026",
      value: atts.ingredients,
      onChange: function onChange(value) {
        props.setAttributes({
          ingredients: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Steps "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "div",
      multiline: "p",
      inline: "false",
      placeholder: "Write instructions\u2026",
      value: atts.steps,
      onChange: function onChange(value) {
        props.setAttributes({
          steps: value
        });
      }
    }));
  },
  // Define what to save in Database
  // This saved HTML will be used for extracting the attributes
  save: function save(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h2",
      value: atts.title
    }), atts.mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: atts.mediaURL
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "ul",
      className: "ingredients",
      value: atts.ingredients
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Instructions "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "div",
      className: "steps",
      value: atts.steps
    }));
  }
});
/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/

/***/ }),

/***/ "./02 - multiple fields/02.css":
/*!*************************************!*\
  !*** ./02 - multiple fields/02.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./03 - toolbar/03-esnext.js":
/*!***********************************!*\
  !*** ./03 - toolbar/03-esnext.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _03_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./03.css */ "./03 - toolbar/03.css");
/* harmony import */ var _03_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_03_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Tutorial 03 - Custom Toolbar
 * 
 * Check out the README in this folder for details
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-03', {
  title: '03 - Custom Toolbar',
  icon: 'book',
  category: 'layout',
  //
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients'
    },
    steps: {
      type: 'array',
      source: 'children',
      selector: '.steps'
    },
    // Attributes for toolbar
    align: {
      type: 'string',
      default: 'none'
    },
    imagePosition: {
      type: 'string',
      default: 'right'
    }
  },
  //
  example: {
    attributes: {
      title: 'Chocolate Chip Cookies',
      mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
      ingredients: ['flour', 'sugar', 'chocolate'],
      steps: ['Mix', 'Bake', 'Enjoy'],
      align: 'left',
      imagePosition: 'right'
    }
  },
  //
  edit: function edit(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToolbarGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToolbarButton"], {
      title: "Image on Right" // Icon list https://developer.wordpress.org/resource/dashicons/ 
      ,
      icon: "align-right" // active state for the buttons
      ,
      className: atts.imagePosition === 'right' ? 'is-pressed' : '',
      onClick: function onClick() {
        return props.setAttributes({
          imagePosition: 'right'
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToolbarButton"], {
      title: "Image on Left",
      icon: "align-left",
      className: atts.imagePosition === 'left' ? 'is-pressed' : '',
      onClick: function onClick() {
        return props.setAttributes({
          imagePosition: 'left'
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: atts.align,
      onChange: function onChange(value) {
        return props.setAttributes({
          align: value ? value : 'none'
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(props.className, "\n        image-").concat(atts.imagePosition, "\n        has-text-align-").concat(atts.align)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "h2",
      inline: "true",
      placeholder: "Write Recipe title\u2026",
      value: atts.title,
      onChange: function onChange(value) {
        return props.setAttributes({
          title: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      allowedTypes: "image",
      value: atts.mediaID,
      onSelect: function onSelect(media) {
        return props.setAttributes({
          mediaURL: media.url,
          mediaID: media.id
        });
      },
      render: function render(obj) {
        var className = atts.mediaID ? 'button button--transparent' : 'button';
        var buttonContent = atts.mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: atts.mediaURL
        }) : 'Upload Image';
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: className,
          onClick: obj.open
        }, " ", buttonContent, " ");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      className: "ingredients",
      placeholder: "Write a list of ingredients\u2026",
      value: atts.ingredients,
      onChange: function onChange(value) {
        return props.setAttributes({
          ingredients: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Steps "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "div",
      multiline: "p",
      inline: "false",
      placeholder: "Write instructions\u2026",
      value: atts.steps,
      onChange: function onChange(value) {
        return props.setAttributes({
          steps: value
        });
      }
    })));
  },
  //
  save: function save(props) {
    var atts = props.attributes; // Add extra class name based on selected toolbar

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-".concat(atts.imagePosition, " has-text-align-").concat(atts.align)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h2",
      value: atts.title
    }), atts.mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: atts.mediaURL
    }), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "ul",
      className: "ingredients",
      value: atts.ingredients
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Instructions "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "div",
      className: "steps",
      value: atts.steps
    }));
  }
});
/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/

/***/ }),

/***/ "./03 - toolbar/03.css":
/*!*****************************!*\
  !*** ./03 - toolbar/03.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./04 - sidebar/04-esnext.js":
/*!***********************************!*\
  !*** ./04 - sidebar/04-esnext.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _04_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./04.css */ "./04 - sidebar/04.css");
/* harmony import */ var _04_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_04_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Tutorial 04 - Custom Inspector
 * 
 * Check out the README in this folder for details
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-04', {
  title: '04 - Custom Inspector',
  icon: 'book',
  category: 'layout',
  example: {},
  //
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients'
    },
    steps: {
      type: 'array',
      source: 'children',
      selector: '.steps'
    },
    // attributes for inspector
    bgColor: {
      type: 'string',
      default: 'transparent'
    },
    textColor: {
      type: 'string',
      default: 'inherit'
    },
    recipeLabel: {
      type: 'string',
      default: 'NEW',
      source: 'children',
      selector: 'label'
    },
    hasImage: {
      type: 'boolean',
      default: true
    }
  },
  //
  edit: function edit(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Settings",
      initialOpen: "true"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: "Recipe Label",
      value: atts.recipeLabel,
      onChange: function onChange(value) {
        return props.setAttributes({
          recipeLabel: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Has Image?",
      checked: atts.hasImage,
      onChange: function onChange(value) {
        return props.setAttributes({
          hasImage: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
      title: "Color",
      initialOpen: "true",
      colorSettings: [// Background color will use palette specified in `add_theme_support( 'editor-color-palette' )`
      {
        label: 'Background Color',
        value: atts.bgColor,
        disableCustomColors: true,
        onChange: function onChange(value) {
          return props.setAttributes({
            bgColor: value ? value : 'transparent'
          });
        }
      }, // We override the palette by adding `colors` argument.
      {
        label: 'Text Color',
        value: atts.textColor,
        disableCustomColors: false,
        colors: [{
          name: 'Black',
          slug: 'red-light',
          color: '#333'
        }, {
          name: 'Gray',
          slug: 'green-light',
          color: '#888'
        }, {
          name: 'White',
          slug: 'blue-light',
          color: '#fff'
        }],
        onChange: function onChange(value) {
          return props.setAttributes({
            textColor: value ? value : 'inherit'
          });
        }
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className,
      style: {
        '--bgColor': atts.bgColor,
        '--textColor': atts.textColor
      }
    }, atts.recipeLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, " ", atts.recipeLabel, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "h2",
      inline: "true",
      placeholder: "Write Recipe title\u2026",
      value: atts.title,
      onChange: function onChange(value) {
        return props.setAttributes({
          title: value
        });
      }
    }), atts.hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      allowedTypes: "image",
      value: atts.mediaID,
      onSelect: function onSelect(media) {
        return props.setAttributes({
          mediaURL: media.url,
          mediaID: media.id
        });
      },
      render: function render(obj) {
        var className = atts.mediaID ? 'button button--transparent' : 'button';
        var buttonContent = atts.mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: atts.mediaURL
        }) : 'Upload Image';
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: className,
          onClick: obj.open
        }, " ", buttonContent, " ");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      className: "ingredients",
      placeholder: "Write a list of ingredients\u2026",
      value: atts.ingredients,
      onChange: function onChange(value) {
        return props.setAttributes({
          ingredients: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Steps "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "div",
      multiline: "p",
      inline: "false",
      placeholder: "Write instructions\u2026",
      value: atts.steps,
      onChange: function onChange(value) {
        return props.setAttributes({
          steps: value
        });
      }
    })));
  },
  //
  save: function save(props) {
    var atts = props.attributes; // Add the colors as CSS Variable

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        '--bgColor': atts.bgColor,
        '--textColor': atts.textColor
      }
    }, atts.recipeLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, atts.recipeLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h2",
      value: atts.title
    }), atts.mediaURL && atts.hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: atts.mediaURL
    }), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Ingredients "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "ul",
      className: "ingredients",
      value: atts.ingredients
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, " Instructions "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "div",
      className: "steps",
      value: atts.steps
    }));
  }
});
/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/

/***/ }),

/***/ "./04 - sidebar/04.css":
/*!*****************************!*\
  !*** ./04 - sidebar/04.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./04b - more sidebar/04b-esnext.js":
/*!******************************************!*\
  !*** ./04b - more sidebar/04b-esnext.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _04b_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./04b.css */ "./04b - more sidebar/04b.css");
/* harmony import */ var _04b_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_04b_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Tutorial 04b - More Inspector Controls
 * 
 * Check out the README in this folder for details
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-04b', {
  title: '04b - More Inspector Controls',
  icon: 'book',
  category: 'layout',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
      default: 'Take a look at the Sidebar >>'
    },
    // values from custom inspector controls
    text: {
      type: 'string'
    },
    textarea: {
      type: 'string'
    },
    select: {
      type: 'string'
    },
    range: {
      type: 'integer',
      default: 5
    },
    checkbox: {
      type: 'boolean',
      default: true
    },
    checkboxes: {
      type: 'object',
      default: {
        'Checkbox 1': false,
        'Checkbox 2': true,
        'Checkbox 3': false
      }
    },
    radio: {
      type: 'string',
      default: 'radio1'
    },
    toggle: {
      type: 'boolean',
      default: true
    }
  },
  example: {},
  //
  edit: function edit(props) {
    var atts = props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Panel 1",
      initialOpen: "false"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: "TextControl",
      value: atts.text,
      onChange: function onChange(value) {
        return props.setAttributes({
          text: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], {
      label: "TextareaControl",
      value: atts.textarea,
      onChange: function onChange(value) {
        return props.setAttributes({
          textarea: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "SelectControl",
      options: [{
        label: 'Option 1',
        value: 'option1'
      }, {
        label: 'Option 2',
        value: 'option2'
      }, {
        label: 'Option 3',
        value: 'option3'
      }],
      value: atts.select,
      onChange: function onChange(value) {
        return props.setAttributes({
          select: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: "RangeControl",
      min: "1",
      max: "10",
      value: atts.range,
      onChange: function onChange(value) {
        return props.setAttributes({
          range: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Panel 2",
      initialOpen: "false"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
      label: "CheckboxControl",
      checked: atts.checkbox,
      onChange: function onChange(value) {
        return props.setAttributes({
          checkbox: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, " Multiple Checkboxes "), ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'].map(function (label) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
        label: label,
        checked: atts.checkboxes[label],
        onChange: function onChange(value) {
          // Copy the object using Object.assign so it doesn't get tracked by React
          var copyCheckboxes = Object.assign({}, atts.checkboxes);
          copyCheckboxes[label] = value;
          props.setAttributes({
            checkboxes: copyCheckboxes
          });
        }
      });
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
      label: "RadioControl",
      help: "Some kind of description",
      options: [{
        label: 'Radio 1',
        value: 'radio1'
      }, {
        label: 'Radio 2',
        value: 'radio2'
      }, {
        label: 'Radio 3',
        value: 'radio3'
      }],
      selected: atts.radio,
      onChange: function onChange(value) {
        return props.setAttributes({
          radio: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "ToggleControl",
      checked: atts.toggle,
      onChange: function onChange(value) {
        return props.setAttributes({
          toggle: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "p",
      className: props.className,
      value: atts.content,
      onChange: function onChange(value) {
        return props.setAttributes({
          content: value
        });
      }
    }));
  },
  //
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "p",
      value: props.attributes.content
    });
  }
});
/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/

/***/ }),

/***/ "./04b - more sidebar/04b.css":
/*!************************************!*\
  !*** ./04b - more sidebar/04b.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./05 - nested blocks/05-esnext.js":
/*!*****************************************!*\
  !*** ./05 - nested blocks/05-esnext.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _05_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./05.css */ "./05 - nested blocks/05.css");
/* harmony import */ var _05_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_05_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Tutorial 05 - Nested Block
 * 
 * Check out the README in this folder for details
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('my/tut-05', {
  title: '05 - Nested Blocks',
  icon: 'book',
  category: 'layout',
  attributes: {},
  // InnerBlocks doesn't need attributes
  example: {},
  //
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"] // Only allow these blocks to be its children, remove this param to allow all blocks
    , {
      allowedBlocks: ['core/image', 'core/heading', 'core/paragraph', 'core/list'] // The initial layout
      ,
      template: [['core/image', {}], ['core/heading', {
        placeholder: 'Book Title'
      }], ['core/paragraph', {
        placeholder: 'Summary'
      }]] // prevent any changes besides content
      ,
      templateLock: "all"
    }));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./05 - nested blocks/05.css":
/*!***********************************!*\
  !*** ./05 - nested blocks/05.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./06 - dynamic block/06-esnext.js":
/*!*****************************************!*\
  !*** ./06 - dynamic block/06-esnext.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _06_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./06.css */ "./06 - dynamic block/06.css");
/* harmony import */ var _06_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_06_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



/**
 * Tutorial 06 - Dynamic Block
 * 
 * Check out the README in this folder for details
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('my/tut-06', {
  title: '06 - Dynamic Block',
  icon: 'book',
  category: 'layout',
  // Attributes for Latest Posts
  attributes: {
    postsPerPage: {
      type: 'number'
    },
    selectedCategory: {
      type: 'string'
    },
    categories: {
      type: 'object'
    }
  },
  edit: function edit(props) {
    var atts = props.attributes; // Get list of categories if doesn't exists yet

    if (!atts.categories) {
      wp.apiFetch({
        url: '/wp-json/wp/v2/categories'
      }).then(function (categories) {
        props.setAttributes({
          categories: categories
        });
      });
    } // If categories not yet loaded


    if (!atts.categories) {
      return 'Loading...';
    } // If no categories found


    if (atts.categories && atts.categories.length <= 0) {
      return 'No categories found, please add some';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "Post Category",
      options: [{
        label: 'Select a Category',
        value: ''
      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(atts.categories.map(function (category) {
        return {
          label: category.name,
          value: category.id
        };
      }))),
      value: atts.selectedCategory,
      onChange: function onChange(value) {
        return props.setAttributes({
          selectedCategory: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
      label: "Posts per Page",
      value: atts.postsPerPage,
      placeholder: "Enter number of posts",
      onChange: function onChange(value) {
        return props.setAttributes({
          postsPerPage: value
        });
      }
    }));
  },
  // Let the gutenberg know that this will be rendered via render_callback in PHP
  // Or you can simply remove this function
  save: function save(props) {
    return null;
  }
});
/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/

/***/ }),

/***/ "./06 - dynamic block/06.css":
/*!***********************************!*\
  !*** ./06 - dynamic block/06.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./esnext-src/index.js":
/*!*****************************!*\
  !*** ./esnext-src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_single_field_01_esnext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../01 - single field/01-esnext.js */ "./01 - single field/01-esnext.js");
/* harmony import */ var _02_multiple_fields_02_esnext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../02 - multiple fields/02-esnext.js */ "./02 - multiple fields/02-esnext.js");
/* harmony import */ var _03_toolbar_03_esnext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../03 - toolbar/03-esnext.js */ "./03 - toolbar/03-esnext.js");
/* harmony import */ var _04_sidebar_04_esnext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../04 - sidebar/04-esnext.js */ "./04 - sidebar/04-esnext.js");
/* harmony import */ var _04b_more_sidebar_04b_esnext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../04b - more sidebar/04b-esnext.js */ "./04b - more sidebar/04b-esnext.js");
/* harmony import */ var _05_nested_blocks_05_esnext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../05 - nested blocks/05-esnext.js */ "./05 - nested blocks/05-esnext.js");
/* harmony import */ var _06_dynamic_block_06_esnext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../06 - dynamic block/06-esnext.js */ "./06 - dynamic block/06-esnext.js");






 // import '../06b - dynamic-block pt2/06b-esnext.js';

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/news-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/news-block/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Block: News Block
 *
 * Custom block to show default news block.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var PostSelectButton = hm.components.PostSelectButton;
var decodeEntities = wp.htmlEntities.decodeEntities;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dateObj; // Format the date in required format.

var dateFormat = function dateFormat(date) {
  dateObj = new Date(date);
  return "".concat(months[dateObj.getMonth()], " ").concat(dateObj.getDate(), ", ").concat(dateObj.getFullYear());
}; // Post type options


var postTypeOptions = [{
  value: 'post',
  label: __('Post', 'atomic-blocks')
}, {
  value: 'page',
  label: __('Page', 'atomic-blocks')
}];

function Inspector(props) {
  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      showMeta = _props$attributes.showMeta,
      showExcerpt = _props$attributes.showExcerpt,
      postType = _props$attributes.postType;
  var isPost = postType === 'post';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, {
    key: "inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
    title: __('Post and Page Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
    label: __('Content Type', 'atomic-blocks'),
    options: postTypeOptions,
    value: postType,
    onChange: function onChange(value) {
      return setAttributes({
        postType: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelRow, null, isPost && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
    label: __('Display Meta'),
    description: __('Show the post meta or not.'),
    checked: showMeta,
    onChange: function onChange(value) {
      return setAttributes({
        showMeta: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelRow, null, isPost && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ToggleControl, {
    label: __('Display Excerpt'),
    description: __('Show the post excerpt or not.'),
    checked: showExcerpt,
    onChange: function onChange(value) {
      return setAttributes({
        showExcerpt: value
      });
    }
  }))));
}

registerBlockType('gk-blocks/news', {
  title: __('News'),
  icon: 'admin-post',
  category: 'common',
  keywords: [__('News')],
  supports: {
    align: ['wide']
  },
  styles: [{
    name: 'featured',
    label: __('Featured'),
    isDefault: true
  }, {
    name: 'list-type',
    label: __('List Type')
  }, {
    name: 'thumb-type',
    label: __('Thumb Type')
  }],
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    postIds: {
      type: 'array',
      default: []
    },
    postType: {
      type: 'string',
      default: 'post'
    },
    posts: {
      type: 'array',
      default: []
    },
    showMeta: {
      type: 'boolean',
      default: false
    },
    showExcerpt: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(props) {
    var _props$attributes2 = props.attributes,
        postType = _props$attributes2.postType,
        postIds = _props$attributes2.postIds,
        posts = _props$attributes2.posts,
        showMeta = _props$attributes2.showMeta,
        showExcerpt = _props$attributes2.showExcerpt,
        setAttributes = props.setAttributes;
    var isPost = postType === 'post';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Inspector, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      key: "inspector"
    }, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({
      setAttributes: setAttributes,
      postTypeOptions: postTypeOptions
    }, props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      key: "edit",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('news-block', props.className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PostSelectButton, {
      value: postIds,
      onSelect: function onSelect(posts) {
        setAttributes({
          posts: posts
        });
        setAttributes({
          postIds: posts.map(function (p) {
            return p.id;
          })
        });
      },
      postType: postType,
      btnProps: {
        isLarge: true
      }
    }, __('Select posts')), posts ? posts.map(function (post) {
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "row"
      }, post.media ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "small-12 columns news-thumbnail position-relative"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
        href: post.link,
        title: post.title.rendered,
        className: "entry-thumb"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
        src: post.media,
        alt: post.title.rendered
      }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "small-12 columns news-details position-relative"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", {
        className: "news-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
        href: post.link,
        title: post.title.rendered,
        rel: "bookmark"
      }, decodeEntities(post.title.rendered))), isPost && showMeta ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "news-meta"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "byline-container"
      }, __('By'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "author vcard gk-author"
      }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "post-date"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("time", null, dateFormat(post.date))))) : null, isPost && showExcerpt ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "m-article-featured__excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt
        }
      }) : null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Button, {
        onClick: function onClick() {
          setAttributes({
            posts: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(posts.filter(function (item) {
              return item.id !== post.id;
            }))
          });
          setAttributes({
            postIds: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(postIds.filter(function (item) {
              return item !== post.id;
            }))
          });
        }
      }, __('Remove'))];
    }) : __('No Post Selected!'))];
  },
  save: function save(props) {
    var _props$attributes3 = props.attributes,
        posts = _props$attributes3.posts,
        showMeta = _props$attributes3.showMeta,
        showExcerpt = _props$attributes3.showExcerpt;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('news-block', props.className)
    }, posts.map(function (post) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "row"
      }, post.media ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "small-12 columns news-thumbnail position-relative"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
        href: post.link,
        title: post.title.rendered,
        className: "entry-thumb"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
        src: post.media,
        alt: post.title.rendered
      }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "small-12 columns news-details position-relative"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", {
        className: "news-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
        href: post.link,
        title: post.title.rendered,
        rel: "bookmark"
      }, decodeEntities(post.title.rendered))), showMeta ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "news-meta"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "byline-container"
      }, __('By'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "author vcard gk-author"
      }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "post-date"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("time", null, dateFormat(post.date))))) : null, showExcerpt ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", {
        className: "hide-for-small-only m-article-featured__excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt
        }
      }) : null));
    }));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_news_block_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/news-block/index */ "./src/blocks/news-block/index.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */
// Import all blocks.
 //import './blocks/top-news/index';
//import './blocks/editor-latest-news/index';

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
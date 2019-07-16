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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

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

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "./src/blocks/latest-posts/index.js":
/*!******************************************!*\
  !*** ./src/blocks/latest-posts/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Block: Latest Posts Block
 *
 * Custom block to show default latest news block.
 *
 * @since   0.1.0
 * @package News_Blocks
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dateObj; // Format the date in required format.

var dateFormat = function dateFormat(date) {
  dateObj = new Date(date);
  return "".concat(months[dateObj.getMonth()], " ").concat(dateObj.getDate(), ", ").concat(dateObj.getFullYear());
};

registerBlockType('news-blocks/latest-posts', {
  title: __('Latest Posts'),
  icon: 'megaphone',
  category: 'common',
  keywords: [__('Latest Posts')],
  edit: withSelect(function (select, props) {
    var postsToShow = props.attributes.postsToShow;

    var _select = select('core'),
        getEntityRecords = _select.getEntityRecords;

    return {
      posts: getEntityRecords('postType', 'post', {
        per_page: postsToShow
      })
    };
  })(function (_ref) {
    var posts = _ref.posts,
        className = _ref.className;

    if (!posts) {
      return __('Loading...');
    }

    if (posts && 0 === posts.length) {
      return __('No Posts Found!!!');
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('news-latest-posts', className)
    }, posts ? posts.map(function (post) {
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "small-12 medium-4 column"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
        href: post.link,
        title: post.title.row
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: post.featured_image_src,
        alt: post.title.row
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "small-12 medium-8 column"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
        href: post.link,
        title: post.title.row
      }, post.title.rendered)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "meta"
      }, "By ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
        href: post.author_info.author_link
      }, post.author_info.display_name), " on ", dateFormat(post.date))))];
    }) : __('No Post found!'))];
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/news-block/components/bullet-list.js":
/*!*********************************************************!*\
  !*** ./src/blocks/news-block/components/bullet-list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Bullet List Markup.
 */
var __ = wp.i18n.__;
var Button = wp.components.Button;
var decodeEntities = wp.htmlEntities.decodeEntities;

function BulletList(_ref) {
  var post = _ref.post,
      isEdit = _ref.isEdit,
      props = _ref.props;
  var _props$attributes = props.attributes,
      postIds = _props$attributes.postIds,
      posts = _props$attributes.posts,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
    className: "news-details position-relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    rel: "bookmark"
  }, decodeEntities(post.title.rendered)), isEdit ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
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
  }, __('Remove')) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (BulletList);

/***/ }),

/***/ "./src/blocks/news-block/components/inspector-controls.js":
/*!****************************************************************!*\
  !*** ./src/blocks/news-block/components/inspector-controls.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Inspector Controls.
 */
var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

function Inspector(_ref) {
  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      showMeta = _props$attributes.showMeta,
      showExcerpt = _props$attributes.showExcerpt,
      showMedia = _props$attributes.showMedia,
      showReadMore = _props$attributes.showReadMore,
      readMoreText = _props$attributes.readMoreText,
      layout = _props$attributes.layout,
      postType = _props$attributes.postType;
  var isPost = postType === 'post'; // Post type options.

  var postTypeOptions = [{
    value: 'post',
    label: __('Post')
  }, {
    value: 'page',
    label: __('Page')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
    key: "inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Post and Page Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Content Type'),
    options: postTypeOptions,
    value: postType,
    onChange: function onChange(value) {
      return setAttributes({
        postType: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Layout'),
    value: layout || 'featured',
    onChange: function onChange(value) {
      return setAttributes({
        layout: 'featured' !== value ? value : undefined
      });
    },
    options: [{
      value: 'featured',
      label: __('Featured')
    }, {
      value: 'post-list',
      label: __('Post List')
    }, {
      value: 'thumb-type',
      label: __('Thumbnails')
    }, {
      value: 'bullet-list',
      label: __('Bullet List')
    }]
  })), 'bullet-list' !== layout && isPost && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Display Media'),
    description: __('Show the featured media or not.'),
    checked: showMedia,
    onChange: function onChange(value) {
      return setAttributes({
        showMedia: value
      });
    }
  })), 'bullet-list' !== layout && isPost && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Display Meta'),
    description: __('Show the post meta or not.'),
    checked: showMeta,
    onChange: function onChange(value) {
      return setAttributes({
        showMeta: value
      });
    }
  })), 'bullet-list' !== layout && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Display Excerpt'),
    description: __('Show the post excerpt or not.'),
    checked: showExcerpt,
    onChange: function onChange(value) {
      return setAttributes({
        showExcerpt: value
      });
    }
  })), 'bullet-list' !== layout && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Display Read More'),
    description: __('Show the read more link or not.'),
    checked: showReadMore,
    onChange: function onChange(value) {
      return setAttributes({
        showReadMore: value
      });
    }
  })), 'bullet-list' !== layout && showReadMore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: __('Customize Read More Text'),
    type: "text",
    value: readMoreText,
    onChange: function onChange(value) {
      return setAttributes({
        readMoreText: value
      });
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/news-block/components/post-list.js":
/*!*******************************************************!*\
  !*** ./src/blocks/news-block/components/post-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Post List Markup.
 */
var __ = wp.i18n.__;
var Button = wp.components.Button;
var decodeEntities = wp.htmlEntities.decodeEntities;
var Fragment = wp.element.Fragment;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dateObj; // Format the date in required format.

var dateFormat = function dateFormat(date) {
  dateObj = new Date(date);
  return "".concat(months[dateObj.getMonth()], " ").concat(dateObj.getDate(), ", ").concat(dateObj.getFullYear());
};

function PostList(_ref) {
  var post = _ref.post,
      isEdit = _ref.isEdit,
      props = _ref.props;
  var _props$attributes = props.attributes,
      postType = _props$attributes.postType,
      postIds = _props$attributes.postIds,
      posts = _props$attributes.posts,
      showMeta = _props$attributes.showMeta,
      showExcerpt = _props$attributes.showExcerpt,
      showMedia = _props$attributes.showMedia,
      showReadMore = _props$attributes.showReadMore,
      readMoreText = _props$attributes.readMoreText,
      setAttributes = props.setAttributes;
  var isPost = postType === 'post';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "row"
  }, showMedia && post.media ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "small-12 columns news-thumbnail position-relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    className: "entry-thumb"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: post.media,
    alt: post.title.rendered
  }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "small-12 columns news-details position-relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
    className: "news-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    rel: "bookmark"
  }, decodeEntities(post.title.rendered))), isPost && showMeta ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "news-meta"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "byline-container"
  }, __('By'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "author vcard news-author"
  }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "post-date"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", null, dateFormat(post.date))))) : null, isPost && showExcerpt ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "m-article-featured__excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt
    }
  }) : null, isPost && showReadMore ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "m-article-featured__readmore"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    rel: "bookmark"
  }, readMoreText)) : null)), isEdit ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
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
  }, __('Remove')) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./src/blocks/news-block/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/news-block/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_inspector_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inspector-controls */ "./src/blocks/news-block/components/inspector-controls.js");
/* harmony import */ var _components_bullet_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bullet-list */ "./src/blocks/news-block/components/bullet-list.js");
/* harmony import */ var _components_post_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post-list */ "./src/blocks/news-block/components/post-list.js");









/**
 * Edit Screen.
 */
var __ = wp.i18n.__;
var PostSelectButton = hm.components.PostSelectButton;
var Component = wp.element.Component;





var EditScreen =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(EditScreen, _Component);

  function EditScreen() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditScreen);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditScreen).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditScreen, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          postType = _this$props$attribute.postType,
          postIds = _this$props$attribute.postIds,
          posts = _this$props$attribute.posts,
          layout = _this$props$attribute.layout,
          setAttributes = _this$props.setAttributes;
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_inspector_controls__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "inspector"
      }, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        setAttributes: setAttributes
      }, this.props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        key: "edit",
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('news-block', 'is-style-' + layout, this.props.className)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PostSelectButton, {
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
      }, __('Select posts')), 'bullet-list' === layout ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", null, posts ? posts.map(function (post) {
        return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_bullet_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: post,
          isEdit: true,
          props: _this.props
        })];
      }) : __('No Post Selected!')) : posts ? posts.map(function (post) {
        return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_post_list__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: post,
          isEdit: true,
          props: _this.props
        })];
      }) : __('No Post Selected!'))];
    }
  }]);

  return EditScreen;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (EditScreen);

/***/ }),

/***/ "./src/blocks/news-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/news-block/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/news-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/news-block/save.js");
/**
 * Block: News Block
 *
 * Custom block to show default news block.
 *
 * @since   0.1.0
 * @package News_Blocks
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


var allAttributes = {
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
  layout: {
    type: 'string',
    default: 'featured'
  },
  showMeta: {
    type: 'boolean',
    default: false
  },
  showExcerpt: {
    type: 'boolean',
    default: false
  },
  showMedia: {
    type: 'boolean',
    default: false
  },
  showReadMore: {
    type: 'boolean',
    default: false
  },
  readMoreText: {
    type: 'text',
    default: __('Read More')
  }
};
registerBlockType('news-blocks/news', {
  title: __('News'),
  icon: 'admin-post',
  category: 'common',
  keywords: [__('News')],
  supports: {
    align: ['wide']
  },
  attributes: allAttributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/news-block/save.js":
/*!***************************************!*\
  !*** ./src/blocks/news-block/save.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_bullet_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bullet-list */ "./src/blocks/news-block/components/bullet-list.js");
/* harmony import */ var _components_post_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-list */ "./src/blocks/news-block/components/post-list.js");







/**
 * Edit Screen.
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;




var SaveScreen =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SaveScreen, _Component);

  function SaveScreen() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SaveScreen);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SaveScreen).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SaveScreen, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$attribute = this.props.attributes,
          posts = _this$props$attribute.posts,
          layout = _this$props$attribute.layout;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('news-block', 'is-style-' + layout, this.props.className)
      }, 'bullet-list' === layout ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", null, posts ? posts.map(function (post) {
        return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_bullet_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
          post: post,
          isEdit: false,
          props: _this.props
        })];
      }) : __('No Post Selected!')) : posts ? posts.map(function (post) {
        return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_post_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: post,
          isEdit: false,
          props: _this.props
        })];
      }) : __('No Post Selected!'));
    }
  }]);

  return SaveScreen;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (SaveScreen);

/***/ }),

/***/ "./src/blocks/section-block/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/section-block/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Block: Section Block
 *
 * Custom block for Section wrapper.
 *
 * @since   0.1.0
 * @package News_Blocks
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInputButton = _wp$blockEditor.URLInputButton,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl;
var ALLOWED_BLOCKS = ['news-blocks/news'];
registerBlockType('news-blocks/section', {
  title: __('Section'),
  icon: 'editor-table',
  category: 'common',
  keywords: [__('Section')],
  supports: {
    align: ['wide']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    sectionType: {
      type: 'string',
      default: 'bl-post-list'
    },
    sectionTitle: {
      type: 'html',
      selector: '.title'
    },
    url: {
      type: 'string'
    },
    text: {
      type: 'string',
      default: __('View More')
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        url = _props$attributes.url,
        text = _props$attributes.text,
        sectionTitle = _props$attributes.sectionTitle,
        sectionType = _props$attributes.sectionType,
        setAttributes = props.setAttributes;
    var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('m-listing', 'blocks-section', {
      'block-slider': sectionType === 'bl-slider',
      'block-post-list': sectionType === 'bl-post-list'
    }, props.className);
    var sectionTypes = [{
      value: 'bl-post-list',
      label: __('Post List')
    }, {
      value: 'bl-slider',
      label: __('Slider')
    }];
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      key: "inspector"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Section Settings')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Content Type'),
      options: sectionTypes,
      value: sectionType,
      onChange: function onChange(value) {
        return setAttributes({
          sectionType: value
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      key: "edit",
      className: wrapperClasses
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row align-justify"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "column shrink"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h3",
      placeholder: __('Add title…'),
      value: sectionTitle,
      className: "title",
      onChange: function onChange(value) {
        return setAttributes({
          sectionTitle: value
        });
      },
      formattingControls: []
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "column shrink view-more-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "view-more",
      value: text,
      formattingControls: [],
      placeholder: __('Add View More Text'),
      onChange: function onChange(value) {
        return setAttributes({
          text: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      url: url,
      onChange: function onChange(value) {
        return setAttributes({
          url: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "blocks-section-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    })))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        url = _props$attributes2.url,
        text = _props$attributes2.text,
        sectionTitle = _props$attributes2.sectionTitle,
        sectionType = _props$attributes2.sectionType;
    var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('m-listing', 'blocks-section', {
      'block-slider': sectionType === 'bl-slider',
      'block-post-list': sectionType === 'bl-post-list'
    }, props.className);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      key: "save",
      className: wrapperClasses
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row align-justify"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "column shrink"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h3",
      className: "title",
      value: sectionTitle
    })), url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "column shrink view-more-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: url
    }, text))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "blocks-section-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/top-news/index.js":
/*!**************************************!*\
  !*** ./src/blocks/top-news/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Block: Top News
 *
 * Custom block to show top news section.
 *
 * @since   0.1.0
 * @package News_Blocks
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var PostSelectButton = hm.components.PostSelectButton;
var decodeEntities = wp.htmlEntities.decodeEntities;
var Button = wp.components.Button;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;

var ALLOWED_BLOCKS = ['core/shortcode'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dateObj; // Format the date in required format.

var dateFormat = function dateFormat(date) {
  dateObj = new Date(date);
  return "".concat(months[dateObj.getMonth()], " ").concat(dateObj.getDate(), ", ").concat(dateObj.getFullYear());
}; // Common article layout for backend.


var editArticle = function editArticle(post, index, posts, postIds, setAttributes) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article m-block-link m-article-featured large-featured type-post" : "m-article m-block-link m-article-wide large-wide type-post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__thumb small-12 columns position-relative" : "m-article-wide__thumb shrink columns position-relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    className: "entry-thumb"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
    src: post.media,
    alt: post.title.rendered
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__inner columns" : "m-article-wide__inner columns"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
    className: 0 === index ? "m-article-featured__title entry-title" : "m-article-wide__title entry-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    rel: "bookmark"
  }, decodeEntities(post.title.rendered))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__detail" : "m-article-wide__detail"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "byline-container"
  }, __('By'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "author vcard news-author"
  }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "post-date"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("time", null, dateFormat(post.date))))), 0 === index ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "hide-for-small-only m-article-featured__excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt
    }
  }) : '')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
    onClick: function onClick() {
      setAttributes({
        posts: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(posts.filter(function (item) {
          return item.id !== post.id;
        }))
      });
      setAttributes({
        postIds: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(postIds.filter(function (item) {
          return item !== post.id;
        }))
      });
    }
  }, __('Remove')));
}; // Common article layout for frontend.


var article = function article(post, index) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article m-block-link m-article-featured large-featured type-post" : "m-article m-block-link m-article-wide large-wide type-post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__thumb small-12 columns position-relative" : "m-article-wide__thumb shrink columns position-relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    className: "entry-thumb"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
    src: post.media,
    alt: post.title.rendered
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__inner columns" : "m-article-wide__inner columns"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
    className: 0 === index ? "m-article-featured__title entry-title" : "m-article-wide__title entry-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
    href: post.link,
    title: post.title.rendered,
    rel: "bookmark"
  }, post.title.rendered)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 0 === index ? "m-article-featured__detail" : "m-article-wide__detail"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "byline-container"
  }, __('By'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "author vcard news-author"
  }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "post-date"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("time", null, dateFormat(post.date))))), 0 === index ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "hide-for-small-only m-article-featured__excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt
    }
  }) : '')));
};

registerBlockType('news-blocks/top-news', {
  title: __('Top News'),
  icon: 'admin-post',
  category: 'common',
  keywords: [__('Top News')],
  supports: {
    align: ['wide']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    postIds: {
      type: 'array',
      default: []
    },
    posts: {
      type: 'array',
      default: []
    },
    sectionTitle: {
      source: 'html',
      selector: '.title'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        postIds = _props$attributes.postIds,
        posts = _props$attributes.posts,
        sectionTitle = _props$attributes.sectionTitle,
        setAttributes = props.setAttributes;

    var _posts = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(posts),
        editFirst = _posts[0],
        editRest = _posts.slice(1);

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      key: "edit",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('m-listing', 'news-primary-listing', props.className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-9 small-12 columns top-story-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "h2",
      placeholder: __('Add title…'),
      value: sectionTitle,
      className: "title",
      onChange: function onChange(value) {
        return setAttributes({
          sectionTitle: value
        });
      },
      formattingControls: []
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-3 small-12 columns"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PostSelectButton, {
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
      postType: "post",
      maxPosts: 5,
      btnProps: {
        isLarge: true
      }
    }, __('Select posts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-5 small-12 columns medium-order-2 has-heading"
    }, editFirst ? editArticle(editFirst, 0, posts, postIds, setAttributes) : __('No Post Selected!')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-4 small-12 columns medium-order-1"
    }, editRest ? editRest.map(function (post) {
      return editArticle(post, 1, posts, postIds, setAttributes);
    }) : __('No Post Selected!')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-3 columns medium-order-3 text-center primary-section-placeholder has-heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }))))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        sectionTitle = _props$attributes2.sectionTitle,
        posts = _props$attributes2.posts; // Array Destructuring.

    var _posts2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(posts),
        first = _posts2[0],
        rest = _posts2.slice(1);

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('m-listing', 'news-primary-listing', props.className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-9 small-12 columns top-story-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText.Content, {
      tagName: "h4",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('title'),
      value: sectionTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-5 small-12 columns medium-order-2 has-heading"
    }, article(first, 0)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-4 small-12 columns medium-order-1"
    }, rest.map(function (post) {
      return article(post, 1);
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "medium-3 columns medium-order-3 text-center primary-section-placeholder has-heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null))));
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
/* harmony import */ var _blocks_section_block_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/section-block/index */ "./src/blocks/section-block/index.js");
/* harmony import */ var _blocks_news_block_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/news-block/index */ "./src/blocks/news-block/index.js");
/* harmony import */ var _blocks_top_news_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/top-news/index */ "./src/blocks/top-news/index.js");
/* harmony import */ var _blocks_latest_posts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/latest-posts/index */ "./src/blocks/latest-posts/index.js");
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
 * @package News_Blocks
 */
// Import all blocks.



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
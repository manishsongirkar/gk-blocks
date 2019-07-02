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
 * @package Gk_Blocks
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
    className: "author vcard gk-author"
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
    className: "author vcard gk-author"
  }, post.author_name), " \u2022 ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "post-date"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("time", null, dateFormat(post.date))))), 0 === index ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "hide-for-small-only m-article-featured__excerpt",
    dangerouslySetInnerHTML: {
      __html: post.excerpt
    }
  }) : '')));
};

registerBlockType('gk-blocks/top-news', {
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

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: "edit",
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: "m-listing gk-primary-listing"
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
    })))))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        sectionTitle = _props$attributes2.sectionTitle,
        posts = _props$attributes2.posts; // Array Destructuring.

    var _posts2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(posts),
        first = _posts2[0],
        rest = _posts2.slice(1);

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: "m-listing gk-primary-listing"
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks.Content, null)))));
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
/* harmony import */ var _blocks_top_news_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/top-news/index */ "./src/blocks/top-news/index.js");
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
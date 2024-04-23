/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugins/sidebar.js":
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const MetaFieldInput = () => {
  const subtitleValue = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/editor').getEditedPostAttribute('meta')._demo_block_meta_box_gutenberg_blocks;
  }, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/editor');
  const onChangePostSubtitle = newValue => {
    editPost({
      meta: {
        _demo_block_meta_box_gutenberg_blocks: newValue
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Options', 'demo-block-meta-plugin')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Options', 'demo-block-meta-plugin'),
    value: subtitleValue,
    onChange: onChangePostSubtitle
  }));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('demo-block-meta-plugin', {
  render: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
      name: "meta-field-sidebar",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Options', 'demo-block-meta-plugin'),
      icon: "admin-settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MetaFieldInput, null));
  }
});

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   populatedTodos: () => (/* binding */ populatedTodos),
/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo),
/* harmony export */   updateTodo: () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/store/type.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/store/controls.js");


function* addTodo(title) {
  try {
    const todo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title);
    return {
      type: _type__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,
      todo
    };
  } catch (error) {
    return dispatch('core/notices').createErrorNotice(error.message || 'Data could not be created');
  }
}
;
function* toggleTodo(todo, index) {
  try {
    yield updateTodo({
      ...todo,
      loading: true
    }, index);
    const updatedTodo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.toggleTodo)(todo);
    return updateTodo(updatedTodo, index);
  } catch (error) {
    return dispatch('core/notices').createErrorNotice(error.message || 'Data could not updated');
  }
}
const updateTodo = (todo, index) => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__.UPDATED_TODO,
    todo,
    index
  };
};
const populatedTodos = todos => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__.POPULATED_TODOS,
    todos
  };
};

/***/ }),

/***/ "./src/store/controls.js":
/*!*******************************!*\
  !*** ./src/store/controls.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchTodos: () => (/* binding */ fetchTodos),
/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/store/type.js");

const fetchTodos = () => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FETCH_TODOS
  };
};
const createTodo = title => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__.CREATE_TODO,
    title
  };
};
const toggleTodo = todo => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_TODO,
    todo
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not fetch todos');
    });
  },
  CREATE_TODO({
    title
  }) {
    return window.fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not create todos');
    });
  },
  TOGGLE_TODO({
    todo
  }) {
    return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !todo.completed
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not updated todos');
    });
  }
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/store/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('todo-store/store', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/store/type.js");

const DEFAULT_STATS = {
  items: []
};
const reducer = (state = DEFAULT_STATS, action) => {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.todo]
      };
    case _type__WEBPACK_IMPORTED_MODULE_0__.POPULATED_TODOS:
      return {
        ...state,
        items: action.todos
      };
    case _type__WEBPACK_IMPORTED_MODULE_0__.UPDATED_TODO:
      {
        const itemsCopy = [...state.items];
        itemsCopy[action.index] = action.todo;
        return {
          ...state,
          items: itemsCopy
        };
      }
    default:
      return {
        ...state
      };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/store/resolvers.js":
/*!********************************!*\
  !*** ./src/store/resolvers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodos: () => (/* binding */ getTodos)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");



function* getTodos() {
  try {
    const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.fetchTodos)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_2__.populatedTodos)(todos);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Data could not be fetched');
  }
}

/***/ }),

/***/ "./src/store/selectors.js":
/*!********************************!*\
  !*** ./src/store/selectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDoneTodosNumbers: () => (/* binding */ getDoneTodosNumbers),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   getTodosNumbers: () => (/* binding */ getTodosNumbers),
/* harmony export */   getUndoneTodosNumbers: () => (/* binding */ getUndoneTodosNumbers)
/* harmony export */ });
const getTodos = state => {
  return state.items;
};
const getTodosNumbers = state => {
  return state.items.length;
};
const getDoneTodosNumbers = state => {
  return state.items.filter(todo => todo.completed).length;
};
const getUndoneTodosNumbers = state => {
  return state.items.filter(todo => !todo.completed).length;
};

/***/ }),

/***/ "./src/store/type.js":
/*!***************************!*\
  !*** ./src/store/type.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TODO: () => (/* binding */ ADD_TODO),
/* harmony export */   CREATE_TODO: () => (/* binding */ CREATE_TODO),
/* harmony export */   FETCH_TODOS: () => (/* binding */ FETCH_TODOS),
/* harmony export */   POPULATED_TODOS: () => (/* binding */ POPULATED_TODOS),
/* harmony export */   TOGGLE_TODO: () => (/* binding */ TOGGLE_TODO),
/* harmony export */   UPDATED_TODO: () => (/* binding */ UPDATED_TODO)
/* harmony export */ });
const ADD_TODO = 'ADD_TODO';
const FETCH_TODOS = 'FETCH_TODOS';
const POPULATED_TODOS = 'POPULATED_TODOS';
const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATED_TODO = 'UPDATED_TODO';

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _plugins_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/sidebar */ "./src/plugins/sidebar.js");


})();

/******/ })()
;
//# sourceMappingURL=index.js.map
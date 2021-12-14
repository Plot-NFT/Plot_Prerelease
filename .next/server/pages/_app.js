/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/userContext.jsx":
/*!*********************************!*\
  !*** ./context/userContext.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n/* eslint-disable react/prop-types */ \nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext();\nUserContext.displayName = \"UserContext\";\nfunction UserProvider({ children  }) {\n    const userReducer = (state, action)=>{\n        switch(action.type){\n            case \"loading\":\n                return {\n                    ...state,\n                    status: \"loading\"\n                };\n            case \"submitting\":\n                return {\n                    ...state,\n                    status: \"submitting\"\n                };\n            case \"success\":\n                return {\n                    wallet: action.payload.wallet,\n                    mailingStatus: action.payload.mailingStatus,\n                    status: \"success\"\n                };\n            case \"failed\":\n                return {\n                    ...state,\n                    status: \"failed\"\n                };\n            case \"logout\":\n                return {\n                    wallet: null,\n                    mailingStatus: \"unknown\",\n                    status: \"logout\"\n                };\n            default:\n                throw new Error(`Unhandled action type: ${action.type}`);\n        }\n    };\n    const [user, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(userReducer, {\n        wallet: null,\n        mailingStatus: \"unknown\",\n        status: \"idle\"\n    });\n    const value = [\n        user,\n        dispatch\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: value,\n        __source: {\n            fileName: \"/home/bisma/Desktop/projects/plot_prerelease/context/userContext.jsx\",\n            lineNumber: 44,\n            columnNumber: 10\n        },\n        __self: this,\n        children: children\n    }));\n}\nfunction useUser() {\n    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(UserContext);\n    if (context === undefined) {\n        throw new Error(`useUser must be used within a UserProvider`);\n    }\n    return context;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsRUFBcUMsb0NBQ1A7QUFFOUIsS0FBSyxDQUFDQyxXQUFXLGlCQUFHRCxnREFBbUI7QUFDdkNDLFdBQVcsQ0FBQ0UsV0FBVyxHQUFHLENBQWE7U0FFOUJDLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNuQyxLQUFLLENBQUNDLFdBQVcsSUFBSUMsS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztRQUN0QyxNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtZQUNqQixJQUFJLENBQUMsQ0FBUztnQkFDWixNQUFNLENBQUMsQ0FBQzt1QkFBSUYsS0FBSztvQkFBRUcsTUFBTSxFQUFFLENBQVM7Z0JBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsQ0FBWTtnQkFDZixNQUFNLENBQUMsQ0FBQzt1QkFBSUgsS0FBSztvQkFBRUcsTUFBTSxFQUFFLENBQVk7Z0JBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsQ0FBUztnQkFDWixNQUFNLENBQUMsQ0FBQztvQkFDTkMsTUFBTSxFQUFFSCxNQUFNLENBQUNJLE9BQU8sQ0FBQ0QsTUFBTTtvQkFDN0JFLGFBQWEsRUFBRUwsTUFBTSxDQUFDSSxPQUFPLENBQUNDLGFBQWE7b0JBQzNDSCxNQUFNLEVBQUUsQ0FBUztnQkFDbkIsQ0FBQztZQUNILElBQUksQ0FBQyxDQUFRO2dCQUNYLE1BQU0sQ0FBQyxDQUFDO3VCQUNISCxLQUFLO29CQUNSRyxNQUFNLEVBQUUsQ0FBUTtnQkFDbEIsQ0FBQztZQUNILElBQUksQ0FBQyxDQUFRO2dCQUNYLE1BQU0sQ0FBQyxDQUFDO29CQUNOQyxNQUFNLEVBQUUsSUFBSTtvQkFDWkUsYUFBYSxFQUFFLENBQVM7b0JBQ3hCSCxNQUFNLEVBQUUsQ0FBUTtnQkFDbEIsQ0FBQzs7Z0JBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQ0ksS0FBSyxFQUFFLHVCQUF1QixFQUFFTixNQUFNLENBQUNDLElBQUk7O0lBRTNELENBQUM7SUFFRCxLQUFLLEVBQUVNLElBQUksRUFBRUMsUUFBUSxJQUFJaEIsNkNBQWdCLENBQUNNLFdBQVcsRUFBRSxDQUFDO1FBQ3RESyxNQUFNLEVBQUUsSUFBSTtRQUNaRSxhQUFhLEVBQUUsQ0FBUztRQUN4QkgsTUFBTSxFQUFFLENBQU07SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUNIO1FBQUFBLElBQUk7UUFBRUMsUUFBUTtJQUFBLENBQUM7SUFFOUIsTUFBTSxzRUFBRWYsV0FBVyxDQUFDa0IsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7a0JBQUdiLFFBQVE7O0FBQ3RELENBQUM7U0FFUWUsT0FBTyxHQUFHLENBQUM7SUFDbEIsS0FBSyxDQUFDQyxPQUFPLEdBQUdyQiw2Q0FBZ0IsQ0FBQ0MsV0FBVztJQUM1QyxFQUFFLEVBQUVvQixPQUFPLEtBQUtFLFNBQVMsRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUNULEtBQUssRUFBRSwwQ0FBMEM7SUFDN0QsQ0FBQztJQUNELE1BQU0sQ0FBQ08sT0FBTztBQUNoQixDQUFDO0FBRWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC91c2VyQ29udGV4dC5qc3g/ZWExOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5Vc2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiVXNlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gVXNlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcImxvYWRpbmdcIjpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN0YXR1czogXCJsb2FkaW5nXCIgfTtcbiAgICAgIGNhc2UgXCJzdWJtaXR0aW5nXCI6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdGF0dXM6IFwic3VibWl0dGluZ1wiIH07XG4gICAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdhbGxldDogYWN0aW9uLnBheWxvYWQud2FsbGV0LFxuICAgICAgICAgIG1haWxpbmdTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLm1haWxpbmdTdGF0dXMsXG4gICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJmYWlsZWRcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBzdGF0dXM6IFwiZmFpbGVkXCIsXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2FsbGV0OiBudWxsLFxuICAgICAgICAgIG1haWxpbmdTdGF0dXM6IFwidW5rbm93blwiLFxuICAgICAgICAgIHN0YXR1czogXCJsb2dvdXRcIixcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbdXNlciwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcih1c2VyUmVkdWNlciwge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBtYWlsaW5nU3RhdHVzOiBcInVua25vd25cIixcbiAgICBzdGF0dXM6IFwiaWRsZVwiLFxuICB9KTtcblxuICBjb25zdCB2YWx1ZSA9IFt1c2VyLCBkaXNwYXRjaF07XG5cbiAgcmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXJgKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IHsgVXNlclByb3ZpZGVyLCB1c2VVc2VyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzdGF0dXMiLCJ3YWxsZXQiLCJwYXlsb2FkIiwibWFpbGluZ1N0YXR1cyIsIkVycm9yIiwidXNlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VVc2VyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/userContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @usedapp/core */ \"@usedapp/core\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usedapp_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/userContext */ \"./context/userContext.jsx\");\n\n/* eslint-disable react/prop-types */ /* eslint-disable react/react-in-jsx-scope */ \n\n\nconst config = {\n    readOnlyChainId: _usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Mumbai,\n    readOnlyUrls: {\n        [_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.ChainId.Mumbai]: \"https://polygon-mumbai.g.alchemy.com/v2/RHYyHR_rZWtSVvLAG9ul-YfTLzSpCceg\"\n    }\n};\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_usedapp_core__WEBPACK_IMPORTED_MODULE_2__.DAppProvider, {\n        config: config,\n        __source: {\n            fileName: \"/home/bisma/Desktop/projects/plot_prerelease/pages/_app.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_userContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n            __source: {\n                fileName: \"/home/bisma/Desktop/projects/plot_prerelease/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"grid-wrapper\",\n                __source: {\n                    fileName: \"/home/bisma/Desktop/projects/plot_prerelease/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"/home/bisma/Desktop/projects/plot_prerelease/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    },\n                    __self: this\n                })\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQXFDLG9DQUNyQyxFQUE2Qyw0Q0FDbEI7QUFFMEI7QUFDQTtBQUVyRCxLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLGVBQWUsRUFBRUgseURBQWM7SUFDL0JLLFlBQVksRUFBRSxDQUFDO1NBQ1pMLHlEQUFjLEdBQ2IsQ0FBMEU7SUFDOUUsQ0FBQztBQUNILENBQUM7U0FFUU0sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxzRUFDSFQsdURBQVk7UUFBQ0csTUFBTSxFQUFFQSxNQUFNOzs7Ozs7O3VGQUN6QkQsOERBQVk7Ozs7Ozs7MkZBQ1ZRLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFjOzs7Ozs7OytGQUMxQkgsU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgXCIuLi9zY3NzL3N0eWxlLnNjc3NcIjtcblxuaW1wb3J0IHsgREFwcFByb3ZpZGVyLCBDaGFpbklkIH0gZnJvbSBcIkB1c2VkYXBwL2NvcmVcIjtcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3VzZXJDb250ZXh0XCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgcmVhZE9ubHlDaGFpbklkOiBDaGFpbklkLk11bWJhaSxcbiAgcmVhZE9ubHlVcmxzOiB7XG4gICAgW0NoYWluSWQuTXVtYmFpXTpcbiAgICAgIFwiaHR0cHM6Ly9wb2x5Z29uLW11bWJhaS5nLmFsY2hlbXkuY29tL3YyL1JIWXlIUl9yWld0U1Z2TEFHOXVsLVlmVEx6U3BDY2VnXCIsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8REFwcFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC13cmFwcGVyXCI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVXNlclByb3ZpZGVyPlxuICAgIDwvREFwcFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJEQXBwUHJvdmlkZXIiLCJDaGFpbklkIiwiVXNlclByb3ZpZGVyIiwiY29uZmlnIiwicmVhZE9ubHlDaGFpbklkIiwiTXVtYmFpIiwicmVhZE9ubHlVcmxzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@usedapp/core":
/*!********************************!*\
  !*** external "@usedapp/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@usedapp/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
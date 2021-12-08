"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ UserProvider),
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable react/prop-types */ 
const UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext();
UserContext.displayName = "UserContext";
function UserProvider({ children  }) {
    const userReducer = (state, action)=>{
        switch(action.type){
            case "loading":
                return {
                    ...state,
                    status: "loading"
                };
            case "submitting":
                return {
                    ...state,
                    status: "submitting"
                };
            case "success":
                return {
                    wallet: action.payload.wallet,
                    mailingStatus: action.payload.mailingStatus,
                    status: "success"
                };
            case "failed":
                return {
                    ...state,
                    status: "failed"
                };
            case "logout":
                return {
                    wallet: null,
                    mailingStatus: "unknown",
                    status: "logout"
                };
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    };
    const [user, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(userReducer, {
        wallet: null,
        mailingStatus: "unknown",
        status: "idle"
    });
    const value = [
        user,
        dispatch
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: value,
        children: children
    }));
}
function useUser() {
    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(UserContext);
    if (context === undefined) {
        throw new Error(`useUser must be used within a UserProvider`);
    }
    return context;
}



/***/ })

};
;
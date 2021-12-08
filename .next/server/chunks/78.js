"use strict";
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

class MongoDB {
    static instance;
    static async _connect() {
        this.instance = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
    }
    static async getInstance() {
        if (!this.instance) {
            try {
                await this._connect();
                console.log(`MongoDB is running at ${(mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.host)}`);
                return this.instance;
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(`MongoDB is running at ${(mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.host)}`);
            return this.instance;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MongoDB);


/***/ }),

/***/ 624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const protectAPI = (handler)=>{
    return async (req, res)=>{
        let ipAddress = req.socket.remoteAddress;
        console.log(ipAddress);
        if (ipAddress.substr(0, 7) === "::ffff:") {
            ipAddress = ipAddress.substr(7);
        }
        console.log(ipAddress);
        if (ipAddress !== `${process.env.LOCAL_IP}`) {
            return res.status(403).json({
                success: false,
                message: `Forbidden`
            });
        }
        return handler(req, res);
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (protectAPI);


/***/ })

};
;
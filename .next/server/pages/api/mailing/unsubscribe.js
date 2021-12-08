"use strict";
(() => {
var exports = {};
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const mailingSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
mailingSchema.statics.isEmailRegistered = function(email) {
    return this.findOne({
        email
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.mailing) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("mailing", mailingSchema));


/***/ }),

/***/ 19:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);
/* harmony import */ var _middleware_protectAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(624);
/* harmony import */ var _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(855);
/* harmony import */ var _utils_sendMail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);




async function handler(req, res) {
    await _config_db_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getInstance */ .Z.getInstance();
    const { method  } = req;
    const queries = req.query;
    switch(method){
        case "GET":
            const query = {
                email: queries.email
            };
            try {
                const mailList = await _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteOne */ .Z.deleteOne(query);
                await (0,_utils_sendMail_js__WEBPACK_IMPORTED_MODULE_2__/* .sendUnsubscribeMail */ .OH)(query.email);
                res.json({
                    status: 200,
                    message: "Success unsubscribing email",
                    data: mailList
                });
                res.redirect(`${process.env.DOMAIN}/mailing/unsubscribe`);
            } catch (error) {
                res.json({
                    status: 500,
                    error: "Server error"
                });
            }
            break;
        default:
            res.json({
                status: 405,
                error: "Method is not allowed. Only accept GET"
            });
            break;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_protectAPI_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,271], () => (__webpack_exec__(19)));
module.exports = __webpack_exports__;

})();
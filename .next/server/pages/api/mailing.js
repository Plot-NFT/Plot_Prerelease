"use strict";
(() => {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);
/* harmony import */ var _middleware_protectAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(624);
/* harmony import */ var _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(855);



const validateEmail = (email)=>{
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
async function handler(req, res) {
    await _config_db_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getInstance */ .Z.getInstance();
    const { method  } = req;
    const queries = req.query;
    const body = req.body;
    switch(method){
        case "GET":
            const query = queries.email ? {
                email: queries.email
            } : {
            };
            try {
                const mailList = await _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find(query);
                res.json({
                    status: 200,
                    message: "Success getting mailing data",
                    data: mailList
                });
            } catch (error) {
                res.json({
                    status: 500,
                    error: "Server error"
                });
            }
            break;
        case "POST":
            const isEmailValid = validateEmail(body.email);
            if (isEmailValid) {
                try {
                    const isRegistered = await _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isEmailRegistered */ .Z.isEmailRegistered(body.email);
                    if (!isRegistered) {
                        const newEmail = {
                            email: body.email
                        };
                        await _models_MailingSchema_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(newEmail);
                        res.json({
                            status: 201,
                            message: "Success adding email to mailing list"
                        });
                    } else {
                        res.json({
                            status: 400,
                            error: "Email is already registered, please use another email"
                        });
                    }
                } catch (error) {
                    res.json({
                        status: 500,
                        error: "Server error"
                    });
                }
            } else {
                res.json({
                    status: 400,
                    error: "Invalid input"
                });
            }
            break;
        default:
            res.json({
                status: 405,
                error: "Method is not allowed. Only accept GET and POST"
            });
            break;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_protectAPI_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78], () => (__webpack_exec__(134)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ whitelist)
});

// EXTERNAL MODULE: ./config/db.js
var db = __webpack_require__(809);
// EXTERNAL MODULE: ./middleware/protectAPI.js
var protectAPI = __webpack_require__(624);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/WhitelistSchema.js

const WhitelistSchema = new (external_mongoose_default()).Schema({
    wallet: {
        type: String,
        required: true
    },
    network: {
        type: {
            chainId: Number,
            chainName: String
        }
    },
    mailingStatus: {
        type: String,
        enum: [
            "unregistered",
            "registered"
        ],
        default: "unregistered"
    }
}, {
    timestamps: true
});
/* harmony default export */ const models_WhitelistSchema = ((external_mongoose_default()).models.whitelist || external_mongoose_default().model("whitelist", WhitelistSchema));

// EXTERNAL MODULE: ./utils/sendMail.js
var sendMail = __webpack_require__(271);
;// CONCATENATED MODULE: ./pages/api/whitelist.js




async function handler(req, res) {
    await db/* default.getInstance */.Z.getInstance();
    const { method  } = req;
    const { wallet: userWallet  } = req.query;
    switch(method){
        case "GET":
            const query = userWallet ? {
                wallet: userWallet
            } : {
            };
            try {
                const whitelists = await models_WhitelistSchema.find(query);
                res.json({
                    status: 200,
                    message: "Success getting whitelist data",
                    data: whitelists
                });
            } catch (error) {
                res.json({
                    status: 500,
                    error: "Server error"
                });
            }
            break;
        case "POST":
            const { network , wallet  } = req.body;
            const isWalletValid = wallet.substring(0, 2) === "0x" && wallet.length === 42;
            if (isWalletValid) {
                try {
                    const newWhitelist = {
                        wallet,
                        network
                    };
                    const createdWhitelist = await models_WhitelistSchema.create(newWhitelist);
                    res.json({
                        status: 201,
                        message: "Success adding wallet to whitelist",
                        data: createdWhitelist
                    });
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
        case "PUT":
            try {
                const { email , wallet  } = req.body;
                const isWalletValid = await models_WhitelistSchema.findOne({
                    wallet
                });
                if (isWalletValid) {
                    isWalletValid.mailingStatus = "registered";
                    const updatedUser = await isWalletValid.save();
                    await (0,sendMail/* sendWelcomeMail */.QR)(email);
                    res.json({
                        status: 201,
                        message: "Success updating mailing status",
                        data: updatedUser
                    });
                } else {
                    res.json({
                        status: 400,
                        error: "Invalid input"
                    });
                }
            } catch (error1) {
                res.json({
                    status: 500,
                    error: "Server error"
                });
            }
            break;
        default:
            res.json({
                status: 405,
                error: "Method is not allowed, only accept GET, POST, and PUT"
            });
            break;
    }
}
/* harmony default export */ const whitelist = ((0,protectAPI/* default */.Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,271], () => (__webpack_exec__(519)));
module.exports = __webpack_exports__;

})();
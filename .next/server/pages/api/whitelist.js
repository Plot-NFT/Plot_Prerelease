"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ whitelist)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./config/db.js

class MongoDB {
    static instance;
    static async _connect() {
        this.instance = await external_mongoose_default().connect(process.env.MONGODB_URI);
    }
    static async getInstance() {
        if (!this.instance) {
            try {
                await this._connect();
                console.log(`MongoDB is running at ${(external_mongoose_default()).connection.host}`);
                return this.instance;
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(`MongoDB is running at ${(external_mongoose_default()).connection.host}`);
            return this.instance;
        }
    }
}
/* harmony default export */ const db = (MongoDB);

;// CONCATENATED MODULE: ./middleware/protectAPI.js
const protectAPI = (handler)=>{
    return async (req, res)=>{
        if (!req.socket.remoteAddress.includes(`${process.env.LOCAL_IP}`)) {
            return res.status(403).json({
                success: false,
                message: `Forbidden`
            });
        }
        return handler(req, res);
    };
};
/* harmony default export */ const middleware_protectAPI = (protectAPI);

;// CONCATENATED MODULE: ./models/WhitelistSchema.js

const WhitelistSchema = new (external_mongoose_default()).Schema({
    wallet: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    network: {
        type: {
            chainId: Number,
            chainName: String
        }
    }
}, {
    timestamps: true
});
/* harmony default export */ const models_WhitelistSchema = ((external_mongoose_default()).models.whitelist || external_mongoose_default().model("whitelist", WhitelistSchema));

;// CONCATENATED MODULE: ./pages/api/whitelist.js



async function handler(req, res) {
    await db.getInstance();
    const { method  } = req;
    switch(method){
        case "GET":
            const { wallet: id  } = req.query;
            const query = id ? {
                wallet: id
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
            const { wallet , network  } = req.body;
            const isWalletValid = wallet.substring(0, 2) === "0x" && wallet.length === 42;
            if (isWalletValid) {
                try {
                    const newWhitelist = {
                        wallet,
                        network
                    };
                    await models_WhitelistSchema.create(newWhitelist);
                    res.json({
                        status: 201,
                        message: "Success adding wallet to whitelist"
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
            const validateEmail = (email)=>{
                return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            };
            const { email: email1 , wallet: userWallet  } = req.body;
            const isEmailValid = validateEmail(email1);
            if (isEmailValid) {
                try {
                    const whitelist = await models_WhitelistSchema.findOne({
                        wallet: userWallet
                    });
                    console.log(whitelist);
                    whitelist.email = email1;
                    await whitelist.save();
                    console.log("success saving email");
                    res.json({
                        status: 201,
                        message: "Success adding email to whitelist data"
                    });
                } catch (error) {
                    console.log(error);
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
            break;
    }
}
/* harmony default export */ const whitelist = (middleware_protectAPI(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(895));
module.exports = __webpack_exports__;

})();
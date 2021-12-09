"use strict";
exports.id = 68;
exports.ids = [68];
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

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QR": () => (/* binding */ sendWelcomeMail),
/* harmony export */   "OH": () => (/* binding */ sendUnsubscribeMail)
/* harmony export */ });
/* unused harmony export sendMail */
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(632);
/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();
const readHTMLFile = async (path)=>{
    const template = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(path, {
        encoding: "utf8"
    });
    return template;
};
// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, template) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
        host: "smtp.mailgun.org",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Plotland" <no-reply@plotland.one>',
            to,
            subject,
            html: template
        });
        console.log("Message sent: ", info.messageId);
    } catch (error) {
        console.error(error);
    }
}
async function sendWelcomeMail(to) {
    const subject = "Welcome to Plotland";
    const html = await readHTMLFile(`${__dirname}/email/subscribe.html`);
    const template = ejs__WEBPACK_IMPORTED_MODULE_1___default().render(html, {
        domain: process.env.DOMAIN,
        to
    });
    try {
        await sendMail(to, subject, template);
    } catch (error) {
        console.error(error);
    }
}
async function sendUnsubscribeMail(to) {
    const subject = "Goodbye Plotlander!";
    const template = await readHTMLFile(`${__dirname}/email/unsubscribe.html`);
    await sendMail(to, subject, template);
}



/***/ })

};
;
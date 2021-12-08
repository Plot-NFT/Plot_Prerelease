"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QR": () => (/* binding */ sendWelcomeMail),
/* harmony export */   "OH": () => (/* binding */ sendUnsubscribeMail)
/* harmony export */ });
/* unused harmony export sendMail */
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

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
    const template = `
  <h1>Plot Subscription E-Mail</h1>
  <p>You are now subscribed to the Plot whitelist.</p> 
  <p>We will send another E-Mail on the 31st. of January 2022 to remind you of the upcomming release on February the 1st.</p> 
  <br/>
  
  <p>With best regards, <br/> your Plot Team.</p>
  
  <br/>
  <p>This Mail was automatically generated.</p>

  <a href='${process.env.DOMAIN}/api/mailing/unsubsribe?email=${to}'>Unsubscribe</a>
  
  <p><strong>Plotland.one</strong></p> 
  
  <ul>
    <li>
      <a href='https://plot.bukithub.com'>Discord</a>
    </li>

    <li>
      <a href='https://plot.bukithub.com'>Twitter</a>
    </li>

    <li>
      <a href='https://plot.bukithub.com'>Reddit</a>
    </li>
  </ul>
`;
    try {
        await sendMail(to, subject, template);
    } catch (error) {
        console.error(error);
    }
}
async function sendUnsubscribeMail(to) {
    const subject = "Goodbye Plotlander!";
    const template = `
  <h1>Plot Unsubscribe E-Mail</h1>
  <p>You canceled your subscription for the Plot whitelist.</p> 
  <br/>
  
  <p>With best regards, <br/> your Plot Team.</p>
  
  <br/>
  <p>This Mail was automatically generated.</p>

  <a href='${process.env.DOMAIN}/api/mailing/unsubsribe?email=${to}'>Unsubscribe</a>
  
  <p><strong>Plotland.one</strong></p> 
  
  <ul>
    <li>
      <a href='https://plot.bukithub.com'>Discord</a>
    </li>

    <li>
      <a href='https://plot.bukithub.com'>Twitter</a>
    </li>

    <li>
      <a href='https://plot.bukithub.com'>Reddit</a>
    </li>
  </ul>
`;
    await sendMail(to, subject, template);
}



/***/ })

};
;
import nodemailer from "nodemailer";
import ejs from "ejs";
import { readFile } from "fs/promises";
import moduleName from "../email/index.html";

const readHTMLFile = async (path) => {
  const template = await readFile(path, { encoding: "utf-8" });

  return template;
};

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, template) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Plotland" <no-reply@plotland.one>', // sender address
      to, // list of receivers
      subject, // Subject line
      html: template, // html body
    });

    console.log("Message sent: ", info.messageId);
  } catch (error) {
    console.error(error);
  }
}

async function sendWelcomeMail(to) {
  const subject = "Welcome to Plotland";

  const html = await readHTMLFile("../email/subscribe.html");
  const template = ejs.render(html, { domain: process.env.DOMAIN, to });

  try {
    await sendMail(to, subject, template);
  } catch (error) {
    console.error(error);
  }
}

async function sendUnsubscribeMail(to) {
  const subject = "Goodbye Plotlander!";

  const template = await readHTMLFile("../email/unsubscribe.html");

  await sendMail(to, subject, template);
}

export { sendMail, sendWelcomeMail, sendUnsubscribeMail };

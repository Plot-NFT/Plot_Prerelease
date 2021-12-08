import nodemailer from "nodemailer";

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

export { sendMail, sendWelcomeMail, sendUnsubscribeMail };

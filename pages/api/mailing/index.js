import MongoDB from "../../../config/db.js";
import protectAPI from "../../../middleware/protectAPI.js";
import Mailing from "../../../models/MailingSchema.js";
import axios from "axios";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

async function handler(req, res) {
  await MongoDB.getInstance();

  const { method } = req;
  const queries = req.query;
  const body = req.body;

  switch (method) {
    case "GET":
      const query = queries.email ? { email: queries.email } : {};

      try {
        const mailList = await Mailing.find(query);

        res.json({
          status: 200,
          message: "Success getting mailing data",
          data: mailList,
        });
      } catch (error) {
        res.json({
          status: 500,
          error: "Server error",
        });
      }

      break;
    case "POST":
      const isEmailValid = validateEmail(body.email);

      if (isEmailValid) {
        try {
          const config = {
            headers: {
              Authorization: `Basic ${process.env.MAILGUN_API_KEY}`,
            },
          };

          const isRegistered = await Mailing.findOne({ email: body.email });

          if (!isRegistered) {
            await axios.post(
              `${process.env.MAILGUN_API_URL}/list/lists/no-reply@plotland.one/members?address=${body.email}`,
              {},
              config
            );

            const newEmail = { email: body.email };

            await Mailing.create(newEmail);

            res.json({
              status: 201,
              message: "Success adding email to mailing list",
            });
          } else {
            res.json({
              status: 400,
              error: "Email is already registered, please use another email",
            });
          }
        } catch (error) {
          res.json({
            status: 500,
            error: "Server error",
          });
        }
      } else {
        res.json({
          status: 400,
          error: "Invalid input",
        });
      }
      break;
    default:
      res.json({
        status: 405,
        error: "Method is not allowed. Only accept GET and POST",
      });
      break;
  }
}

export default protectAPI(handler);

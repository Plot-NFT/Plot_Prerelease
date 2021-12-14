import MongoDB from "../../../config/db.js";
import Mailing from "../../../models/MailingSchema.js";
import { sendUnsubscribeMail } from "../../../utils/sendMail.js";
import axios from "axios";

async function handler(req, res) {
  await MongoDB.getInstance();

  const { method } = req;
  const queries = req.query;

  switch (method) {
    case "GET":
      const query = { email: queries.email };
      const config = {
        headers: {
          Authorization: `Basic ${process.env.MAILGUN_API_KEY}`,
        },
      };

      try {
        await axios.delete(
          `${process.env.MAILGUN_API_URL}/lists/no-reply@plotland.one/members/${query.email}`,
          config
        );

        await Mailing.deleteOne(query);

        await sendUnsubscribeMail(query.email);

        res.redirect(`/mailing/unsubscribe`);
      } catch (error) {
        res.json({
          status: 500,
          error: "Server error",
        });
      }

      break;
    default:
      res.json({
        status: 405,
        error: "Method is not allowed. Only accept GET",
      });
      break;
  }
}

export default handler;

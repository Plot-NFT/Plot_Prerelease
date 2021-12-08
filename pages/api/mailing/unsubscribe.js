import MongoDB from "../../../config/db.js";
import protectAPI from "../../../middleware/protectAPI.js";
import Mailing from "../../../models/MailingSchema.js";
import { sendUnsubscribeMail } from "../../../utils/sendMail.js";

async function handler(req, res) {
  await MongoDB.getInstance();

  const { method } = req;
  const queries = req.query;

  switch (method) {
    case "GET":
      const query = { email: queries.email };

      try {
        const mailList = await Mailing.deleteOne(query);

        await sendUnsubscribeMail(query.email);

        res.json({
          status: 200,
          message: "Success unsubscribing email",
          data: mailList,
        });

        res.redirect(`${process.env.DOMAIN}/mailing/unsubscribe`);
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

export default protectAPI(handler);

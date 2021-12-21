import { readFile } from "fs/promises";
import path from "path";
import MongoDB from "../../../config/db.js";
import Mailing from "../../../models/MailingSchema.js";
import { sendUnsubscribeMail } from "../../../utils/sendMail.js";
import axios from "axios";

const __dirname = path.resolve();

const readHTMLFile = async (path) => {
  const template = await readFile(path, { encoding: "utf8" });

  return template;
};

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

        const template = await readHTMLFile(
          `${__dirname}/email/unsubscribe.html`
        );
        await sendUnsubscribeMail(query.email, template);

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

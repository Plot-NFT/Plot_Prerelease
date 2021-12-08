import MongoDB from "../../config/db.js";
import protectAPI from "../../middleware/protectAPI.js";
import Whitelist from "../../models/WhitelistSchema.js";
import { sendWelcomeMail } from "../../utils/sendMail.js";

async function handler(req, res) {
  await MongoDB.getInstance();

  const { method } = req;
  const { wallet: userWallet } = req.query;

  switch (method) {
    case "GET":
      const query = userWallet ? { wallet: userWallet } : {};

      try {
        const whitelists = await Whitelist.find(query);

        res.json({
          status: 200,
          message: "Success getting whitelist data",
          data: whitelists,
        });
      } catch (error) {
        res.json({
          status: 500,
          error: "Server error",
        });
      }
      break;
    case "POST":
      const { network, wallet } = req.body;

      const isWalletValid =
        wallet.substring(0, 2) === "0x" && wallet.length === 42;

      if (isWalletValid) {
        try {
          const newWhitelist = { wallet, network };

          const createdWhitelist = await Whitelist.create(newWhitelist);

          res.json({
            status: 201,
            message: "Success adding wallet to whitelist",
            data: createdWhitelist,
          });
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
    case "PUT":
      try {
        const { email, wallet } = req.body;

        const isWalletValid = await Whitelist.findOne({ wallet });

        if (isWalletValid) {
          isWalletValid.mailingStatus = "registered";

          const updatedUser = await isWalletValid.save();

          await sendWelcomeMail(email);

          res.json({
            status: 201,
            message: "Success updating mailing status",
            data: updatedUser,
          });
        } else {
          res.json({
            status: 400,
            error: "Invalid input",
          });
        }
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
        error: "Method is not allowed, only accept GET, POST, and PUT",
      });
      break;
  }
}

export default protectAPI(handler);

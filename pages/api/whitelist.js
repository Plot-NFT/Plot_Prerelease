import MongoDB from "../../config/db.js";
import protectAPI from "../../middleware/protectAPI.js";
import Whitelist from "../../models/WhitelistSchema.js";

async function handler(req, res) {
  await MongoDB.getInstance();

  const { method } = req;

  switch (method) {
    case "GET":
      const { wallet: id } = req.query;
      const query = id ? { wallet: id } : {};

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
      const { wallet, network } = req.body;

      const isWalletValid =
        wallet.substring(0, 2) === "0x" && wallet.length === 42;

      if (isWalletValid) {
        try {
          const newWhitelist = { wallet, network };

          await Whitelist.create(newWhitelist);

          res.json({
            status: 201,
            message: "Success adding wallet to whitelist",
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
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

      const { email, wallet: userWallet } = req.body;

      const isEmailValid = validateEmail(email);

      if (isEmailValid) {
        try {
          const whitelist = await Whitelist.findOne({ wallet: userWallet });

          console.log(whitelist);

          whitelist.email = email;

          await whitelist.save();

          console.log("success saving email");

          res.json({
            status: 201,
            message: "Success adding email to whitelist data",
          });
        } catch (error) {
          console.log(error);
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
      break;
  }
}

export default protectAPI(handler);

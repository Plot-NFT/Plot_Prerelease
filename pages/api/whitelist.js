import MongoDB from "../../config/db.js";
import Whitelist from "../../models/WhitelistSchema.js";

export default async function handler(req, res) {
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
    default:
      break;
  }
}

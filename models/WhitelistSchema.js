import mongoose from "mongoose";

const WhitelistSchema = new mongoose.Schema(
  {
    wallet: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    network: {
      type: {
        chainId: Number,
        chainName: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.whitelist ||
  mongoose.model("whitelist", WhitelistSchema);

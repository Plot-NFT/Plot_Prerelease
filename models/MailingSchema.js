import mongoose from "mongoose";

const mailingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.mailing ||
  mongoose.model("mailing", mailingSchema);

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

mailingSchema.statics.isEmailRegistered = function (email) {
  return this.findOne({ email });
};

export default mongoose.models.mailing ||
  mongoose.model("mailing", mailingSchema);

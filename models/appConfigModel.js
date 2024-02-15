import mongoose from "mongoose";

const appConfigSchema = new mongoose.Schema(
  {
    configID: {
      type: String,
      required: true,
    },

    params: [
      {
        theme: {
          type: String,
          default: "dark",
        },
        language: {
          type: String,
          default: "en",
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model.appConfig ||
  mongoose.model("appConfig", appConfigSchema);

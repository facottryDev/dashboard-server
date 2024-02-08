import mongoose from "mongoose";

const appConfigSchema = new mongoose.Schema(
  {
    configID: {
      type: String,
      required: true,
    },

    params: {
      type: Map,
      of: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.appConfig ||
  mongoose.model("appConfig", appConfigSchema);

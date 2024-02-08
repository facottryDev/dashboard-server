import mongoose from "mongoose";

const playerConfigSchema = new mongoose.Schema(
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

export default mongoose.model.playerConfig ||
  mongoose.model("playerConfig", playerConfigSchema);

import mongoose from "mongoose";

const playerConfigSchema = new mongoose.Schema(
  {
    configID: {
      type: String,
      required: true,
    },

    params: {
      type: [String],
      required: true,
    },

    projectName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.project ||
  mongoose.model("playerConfig", playerConfigSchema);

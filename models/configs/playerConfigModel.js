import mongoose from "mongoose";

const playerConfigSchema = new mongoose.Schema(
  {
    configID: {
      type: String,
      required: true,
    },

    params: [
      {
        volume: {
          type: Number,
          default: 1,
        },
        autoplay: {
          type: Boolean,
          default: false,
        },
        controls: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model.playerConfig ||
  mongoose.model("playerConfig", playerConfigSchema);

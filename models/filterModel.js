import mongoose from "mongoose";

const filterSchema = new mongoose.Schema(
  {
    filterID: {
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
  mongoose.model("filter", filterSchema);

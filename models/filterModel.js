import mongoose from "mongoose";

const filterSchema = new mongoose.Schema(
  {
    filterID: {
      type: String,
      required: true,
    },

    params: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.filter ||
  mongoose.model("filter", filterSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    companyID: {
      type: String,
    },

    projects: [
      {
        projectID: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model.user ||
  mongoose.model("user", userSchema);

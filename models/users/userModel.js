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
      required: true,
    },

    designation: {
      type: String,
      default: "NA",
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
          enum: ['owner', 'editor', 'viewer']
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model.user ||
  mongoose.model("user", userSchema);

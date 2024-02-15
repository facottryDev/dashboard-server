import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyID: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      default: "NA",
    },

    projects: [
      {
        projectID: {
          type: String,
          required: true,
        },
      },
    ],

    employees: [
      {
        email: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model.company ||
  mongoose.model("company", companySchema);
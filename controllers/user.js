import Company from "../models/users/companyModel.js";
import Project from "../models/users/projectModel.js";
import User from "../models/users/userModel.js";
import Joi from "joi";

export const getCompanyEmployeesID = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      companyID: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { companyID } = req.query;
    const company = await Company.findOne({ companyID }, { employees: 1 });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json(company.employees);
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};

export const getCompanyProjectsID = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      companyID: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { companyID } = req.query;
    const company = await Company.findOne({ companyID }, { projects: 1 });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json(company.projects);
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};

export const getProjectUsers = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      projectID: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { projectID } = req.query;
    const result = await Project.findOne(
      { projectID },
      { owner: 1, editors: 1, viewers: 1 }
    );

    if (!result) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};

export const getUserProjects = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      email: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { email } = req.query;
    const result = await User.findOne({ email }, { projects: 1 });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      email: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { email } = req.query;
    const result = await User.findOne(
      { email },
      { name: 1, email: 1, designation: 1, companyID: 1 }
    );

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};

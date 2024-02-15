import Filter from "../models/filterModel.js";
import AppConfig from "../models/appConfigModel.js";
import PlayerConfig from "../models/playerConfigModel.js";
import Project from "../models/projectModel.js";
import Joi from "joi";

export const getFilterIdFromParams = async (req, res) => {
  try {
    const bodySchema = Joi.object({
        country: Joi.string().required(),
        subscription: Joi.string().required(),
        OS: Joi.string().required(),
        OSver: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const result = await Filter.findOne({ params: { $elemMatch: req.query } }, { filterID: 1 });

    if (!result) {
      return res.status(404).json({ message: "Filter not found" });
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

export const getConfigsFromFilterId = async (req, res) => {
  try {
    const bodySchema = Joi.object({
      filterID: Joi.string().required(),
    });
    await bodySchema.validateAsync(req.query);

    const { filterID } = req.query;
    const result = await Project.findOne(
      { 'configs.filterID': filterID },
      { 'configs.$': 1 }
    );

    if (!result) {
      return res.status(404).json({ message: "Filter not found" });
    }

    const appConfigID = result.configs[0].appConfigID;
    const playerConfigID = result.configs[0].playerConfigID;

    res.status(200).json({ appConfigID, playerConfigID })
  } catch (error) {
    if (error.details) {
      return res
        .status(400)
        .json(error.details.map((detail) => detail.message).join(", "));
    }

    return res.status(500).send(error.message);
  }
};
import model from "../models/appConfigModel.js";

// GET
export const getAppConfig = async (req, res) => {
  try {
    const data = await model.getAppConfig();
    res.json(data || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE / UPDATE
export const saveAppConfig = async (req, res) => {
  try {
    const existing = await model.getAppConfig();

    if (existing) {
      await model.updateAppConfig(existing.id, req.body);
      return res.json({ message: "Updated successfully" });
    } else {
      await model.createAppConfig(req.body);
      return res.json({ message: "Created successfully" });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  getAppConfig,
  saveAppConfig
};
import ctaModel from "../models/ctaModel.js";

// GET
const getCTA = (req, res) => {
  ctaModel.getCTA((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

// CREATE (admin)
const createCTA = (req, res) => {
  try {
    const image = req.file ? req.file.path : null;

    if (!image) {
      return res.status(400).json({ message: "Image required" });
    }

    ctaModel.addCTA(image, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "CTA updated successfully" });
    });

  } catch (err) {
    res.status(500).json(err);
  }
};
export { getCTA, createCTA };

export default {
  getCTA,
  createCTA
};
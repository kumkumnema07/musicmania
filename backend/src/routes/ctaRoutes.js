import express from "express";
const router = express.Router();

import ctaController from "../controllers/ctaController.js";
import upload from "../config/multer.js";
import ensureAuth from "../middleware/authMiddleware.js";

// public
router.get("/cta", ctaController.getCTA);

// admin
router.post(
  "/cta",
  ensureAuth,
  upload.single("image"),
  ctaController.createCTA
);

export default router;
import express from "express";
const router = express.Router();

import dashboardController from "../controllers/dashboardController.js";
import ensureAuth from "../middleware/authMiddleware.js";

router.get(
  "/dashboard/stats",
  ensureAuth,
  dashboardController.getDashboardStats
);

export default router;
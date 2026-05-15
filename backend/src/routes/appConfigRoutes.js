import express from "express";
const router = express.Router();
import controller from "../controllers/appConfigController.js";

router.get("/", controller.getAppConfig);
router.post("/", controller.saveAppConfig);

export default router;
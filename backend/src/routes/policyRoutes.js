import express from "express";
import { getPolicy, savePolicy } from "../controllers/policyController.js";

const router = express.Router();

router.get("/:type", getPolicy);
router.post("/", savePolicy);

export default router;
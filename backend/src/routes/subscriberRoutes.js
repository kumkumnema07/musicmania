import express from "express";
const router = express.Router();

import subscriberController from "../controllers/subscriberController.js";

router.post("/subscribe", subscriberController.subscribe);
router.get("/subscribers", subscriberController.getSubscribers);

export default router;
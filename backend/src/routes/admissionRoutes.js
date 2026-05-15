import express from "express";
const router = express.Router();

import admissionController from "../controllers/admissionController.js";
import upload from "../config/multer.js";

router.get("/admissions", admissionController.getAdmissions);

router.get("/admissions/:id", admissionController.getAdmissionById);

router.post(
  "/admissions",
  upload.single("photo"),
  admissionController.createAdmission
);

router.put(
  "/admissions/:id",
  upload.single("photo"),
  admissionController.updateAdmission
);

// 🔥 NEW ROUTE
router.put("/admissions/:id/remark", admissionController.updateRemark);
router.delete("/admissions/:id", admissionController.deleteAdmission);

export default router;
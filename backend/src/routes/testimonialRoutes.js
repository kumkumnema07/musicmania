import express from "express";
const router = express.Router();

import testimonialController from "../controllers/testimonialController.js";
import upload from "../config/multer.js";
import ensureAuth from "../middleware/authMiddleware.js";

// PUBLIC
router.get("/testimonials", testimonialController.getTestimonials);
router.get("/testimonials/:id", testimonialController.getTestimonialById);

// PROTECTED
router.post(
  "/testimonials",
  ensureAuth,
  upload.single("image"),
  testimonialController.createTestimonial
);

router.put(
  "/testimonials/:id",
  ensureAuth,
  upload.single("image"),
  testimonialController.updateTestimonial
);

router.delete(
  "/testimonials/:id",
  ensureAuth,
  testimonialController.deleteTestimonial
);

export default router;
import express from "express";
import courseController from "../controllers/courseController.js";
import upload from "../config/multer.js";
import ensureAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// public routes
router.get("/courses/:id", courseController.getCourseById);
router.get("/courses", courseController.getCourses);

// protected routes            
router.post(
  "/courses",
  ensureAuth,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 }
  ]),
  courseController.createCourse
);

router.put(
  "/courses/:id",
  ensureAuth,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 }
  ]),
  courseController.updateCourse
);

router.delete(
  "/courses/:id",
  ensureAuth,
  courseController.deleteCourse
);

export default router;


// const express = require("express");
// const router = express.Router();

// const courseController = require("../controllers/courseController");
// const upload = require("../config/multer");

// // middleware सही import
// const { ensureAuth } = require("../middleware/authMiddleware");

// // ---------------- PUBLIC ROUTES ----------------

// // get all courses
// router.get("/courses", courseController.getCourses);

// // get single course
// router.get("/courses/:id", courseController.getCourseById);

// // ---------------- PROTECTED ROUTES ----------------

// // create course
// router.post(
// "/courses",
// ensureAuth,
// upload.fields([
// { name: "image", maxCount: 1 },
// { name: "pdf", maxCount: 1 }
// ]),
// courseController.createCourse
// );

// // update course
// router.put(
// "/courses/:id",
// ensureAuth,
// upload.fields([
// { name: "image", maxCount: 1 },
// { name: "pdf", maxCount: 1 }
// ]),
// courseController.updateCourse
// );

// // delete course
// router.delete(
// "/courses/:id",
// ensureAuth,
// courseController.deleteCourse
// );

// module.exports = router;

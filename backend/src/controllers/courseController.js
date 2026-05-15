import courseModel from "../models/courseModel.js";

// GET ALL COURSES
const getCourses = (req, res) => {
  courseModel.getCourses((err, result) => {
    if (err) {
      console.log("ERROR:", err);
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
};

// GET COURSE BY ID
const getCourseById = (req, res) => {
  const id = req.params.id;

  courseModel.getCourseById(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// CREATE COURSE
const createCourse = (req, res, next) => {
  try {
    console.log("🔥 CREATE COURSE started");
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    console.log("USER:", req.user);

    // Validate required fields
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const image = req.files?.image
      ? req.files.image[0].path
      : null;

    const pdf = req.files?.pdf
      ? req.files.pdf[0].path
      : null;

    console.log("Processed image path:", image);
    console.log("Processed pdf path:", pdf);

    const newCourse = {
      title: req.body.title,
      description: req.body.description,
      image,
      pdf,
      active: req.body.active ? parseInt(req.body.active) : 1
    };

    console.log("New course object:", newCourse);

    courseModel.addCourse(newCourse, (err, result) => {
      if (err) {
        console.error("❌ Database ERROR:", err);
        console.error("Error code:", err.code);
        console.error("Error message:", err.message);
        console.error("Error sql:", err.sql);
        return res.status(500).json({ 
          message: "Failed to create course", 
          error: err.message,
          sqlMessage: err.sqlMessage
        });
      }

      console.log("✅ Course created successfully");
      res.status(201).json({ message: "Course added successfully", result });
    });
  } catch (error) {
    console.error("❌ Controller CATCH ERROR:", error);
    console.error("Error:", error.message);
    next(error); // Pass to global error handler
  }
};

// UPDATE COURSE
const updateCourse = (req, res) => {
  const id = req.params.id;

  const image = req.files?.image
    ? req.files.image[0].path
    : req.body.image; // Keep existing if no new file

  const pdf = req.files?.pdf
    ? req.files.pdf[0].path
    : req.body.pdf; // Keep existing if no new file

  const updatedCourse = {
    title: req.body.title,
    description: req.body.description,
    image,
    pdf,
    active: req.body.active ? parseInt(req.body.active) : 1
  };

  courseModel.updateCourse(id, updatedCourse, (err, result) => {
    if (err) {
      console.log("UPDATE ERROR:", err);
      return res.status(500).json({ message: "Failed to update course", error: err.message });
    }

    res.json({ message: "Course updated successfully" });
  });
};

// DELETE COURSE
const deleteCourse = (req, res) => {
  const id = req.params.id;

  courseModel.deleteCourse(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({ message: "Course deleted successfully" });
  });
};

export default {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
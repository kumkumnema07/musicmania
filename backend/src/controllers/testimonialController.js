import testimonialModel from "../models/testimonialModel.js";

// GET ALL
const getTestimonials = (req, res) => {
  testimonialModel.getTestimonials((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// GET BY ID
const getTestimonialById = (req, res) => {
  const id = req.params.id;

  testimonialModel.getTestimonialById(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// CREATE
const createTestimonial = (req, res) => {
  const image = req.file
    ? `/uploads/images/${req.file.filename}`
    : null;

  const newTestimonial = {
    student_name: req.body.student_name,
    city: req.body.city,
    message: req.body.message,
    image
  };

  testimonialModel.addTestimonial(newTestimonial, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Testimonial added successfully" });
  });
};

// UPDATE
const updateTestimonial = (req, res) => {
  const id = req.params.id;

  const updatedData = {
    student_name: req.body.student_name,
    city: req.body.city,
    message: req.body.message
  };

  testimonialModel.updateTestimonial(id, updatedData, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Testimonial updated successfully" });
  });
};

// DELETE
const deleteTestimonial = (req, res) => {
  const id = req.params.id;

  testimonialModel.deleteTestimonial(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Testimonial deleted successfully" });
  });
};

export {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};

export default {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};
import db from "../config/db.js";

// GET ALL
const getTestimonials = (callback) => {
  db.query("SELECT * FROM testimonials", callback);
};

// GET BY ID
const getTestimonialById = (id, callback) => {
  db.query("SELECT * FROM testimonials WHERE id = ?", [id], callback);
};

// CREATE
const addTestimonial = (testimonial, callback) => {
  const sql = `
    INSERT INTO testimonials 
    (student_name, city, message, image) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      testimonial.student_name,
      testimonial.city,
      testimonial.message,
      testimonial.image
    ],
    callback
  );
};

// UPDATE
const updateTestimonial = (id, testimonial, callback) => {
  const sql = `
    UPDATE testimonials 
    SET student_name = ?, city = ?, message = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [testimonial.student_name, testimonial.city, testimonial.message, id],
    callback
  );
};

// DELETE
const deleteTestimonial = (id, callback) => {
  db.query("DELETE FROM testimonials WHERE id = ?", [id], callback);
};

export default {
  getTestimonials,
  getTestimonialById,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial
};
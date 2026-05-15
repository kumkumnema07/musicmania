import db from "../config/db.js";

const getCourseById = (id, callback) => {
  db.query("SELECT * FROM courses WHERE id = ?", [id], callback);
};

const getCourses = (callback) => {
  db.query("SELECT * FROM courses", callback);
};

const addCourse = (course, callback) => {
  const sql = `
    INSERT INTO courses
    (title, description, image, pdf, active)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [course.title, course.description, course.image, course.pdf, course.active || 1],
    callback
  );
};

const updateCourse = (id, course, callback) => {
  const sql = "UPDATE courses SET title = ?, description = ?, image = ?, pdf = ?, active = ? WHERE id = ?";
  db.query(sql, [course.title, course.description, course.image, course.pdf, course.active, id], callback);
};

const deleteCourse = (id, callback) => {
  const sql = "DELETE FROM courses WHERE id = ?";
  db.query(sql, [id], callback);
};

export default {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse
};
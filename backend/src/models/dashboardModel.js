import db from "../config/db.js";

const getStats = (callback) => {

  const sql = `
    SELECT
      (SELECT COUNT(*) FROM courses) AS totalCourses,
      (SELECT COUNT(*) FROM student_admissions) AS totalAdmissions
  `;

  db.query(sql, callback);
};

export default {
  getStats
};
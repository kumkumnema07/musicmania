import db from "../config/db.js";

const getAdmissions = (callback) => {
  db.query("SELECT * FROM student_admissions ORDER BY id DESC", callback);
};

const getAdmissionById = (id, callback) => {
  db.query("SELECT * FROM student_admissions WHERE id = ?", [id], callback);
};
//update remark
const updateRemark = (id, remark, callback) => {
  db.query(
    "UPDATE student_admissions SET remark=? WHERE id=?",
    [remark, id],
    callback
  );
};

const checkDuplicate = (email, mobile, callback) => {
  const sql = "SELECT * FROM student_admissions WHERE email=? OR mobile=?";
  db.query(sql, [email, mobile], callback);
};

const addAdmission = (admission, callback) => {

  const sql = `
  INSERT INTO student_admissions
  (name,email,mobile,date_of_birth,gender,branch,address,
  batch_hour,batch_minute,batch_period,class_days,photo,
  course,guardian_number,payment_method,fee_submitted,
  occupation,heard_about)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  db.query(sql, [
    admission.name,
    admission.email,
    admission.mobile,
    admission.date_of_birth,
    admission.gender,
    admission.branch,
    admission.address,
    admission.batch_hour,
    admission.batch_minute,
    admission.batch_period,
    admission.class_days,
    admission.photo,
    admission.course,
    admission.guardian_number,
    admission.payment_method,
    admission.fee_submitted,
    admission.occupation,
    admission.heard_about
  ], callback);

};

const updateAdmission = (id, admission, callback) => {

  const sql = `
  UPDATE student_admissions
  SET name=?, email=?, mobile=?, branch=?, course=?
  WHERE id=?
  `;

  db.query(sql, [
    admission.name,
    admission.email,
    admission.mobile,
    admission.branch,
    admission.course,
    id
  ], callback);

};

const deleteAdmission = (id, callback) => {
  db.query("DELETE FROM student_admissions WHERE id=?", [id], callback);
};

export default {
  getAdmissions,
  getAdmissionById,
  addAdmission,
  updateAdmission,
  deleteAdmission,
  checkDuplicate,
  updateRemark
};
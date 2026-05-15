
import admissionModel from "../models/admissionModel.js";


// ✅ GET ALL
const getAdmissions = (req, res) => {
  admissionModel.getAdmissions((err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json(result);
  });
};


// ✅ GET ONE
const getAdmissionById = (req, res) => {
  admissionModel.getAdmissionById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json(result);
  });
};


// ✅ CREATE
const createAdmission = (req, res) => {
  const data = req.body;

 const photo = req.file ? req.file.path : null;

  admissionModel.checkDuplicate(data.email, data.mobile, (err, result) => {
    if (result.length > 0) {
      return res.json({ message: "Student already registered" });
    }

    admissionModel.addAdmission({ ...data, photo }, (err) => {
      if (err) return res.status(500).json({ message: "Insert failed" });
      res.json({ message: "Admission submitted successfully" });
    });
  });
};


// ✅ UPDATE
const updateAdmission = (req, res) => {
  admissionModel.updateAdmission(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Updated" });
  });
};


// ✅ DELETE
const deleteAdmission = (req, res) => {
  admissionModel.deleteAdmission(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: "Delete failed" });
    res.json({ message: "Deleted" });
  });
};


// ✅ 🔥 REMARK
const updateRemark = (req, res) => {
  admissionModel.updateRemark(req.params.id, req.body.remark, (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Remark updated successfully" });
  });
};


// ✅ ONLY ONE EXPORT
export default {
  getAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
  updateRemark
};

// this is mid
// import admissionModel from "../models/admissionModel.js";


// // GET ALL ADMISSIONS
// export const getAdmissions = (req, res) => {

//   admissionModel.getAdmissions((err, result) => {

//     if (err) {
//       console.error("Get Admissions Error:", err);
//       return res.status(500).json({ message: "Server error" });
//     }

//     res.json(result);

//   });

// };
// //remark
// const updateRemark = (req, res) => {
//   const id = req.params.id;
//   const { remark } = req.body;

//   db.query(
//     "UPDATE student_admissions SET remark=? WHERE id=?",
//     [remark, id],
//     (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Update failed" });
//       }

//       res.json({ message: "Remark updated successfully" });
//     }
//   );
// };

// // GET SINGLE ADMISSION
// export const getAdmissionById = (req, res) => {

//   const id = req.params.id;

//   admissionModel.getAdmissionById(id, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Server error" });
//     }

//     res.json(result);

//   });

// };


// // CREATE ADMISSION
// export const createAdmission = (req, res) => {

//   const {
//     name,
//     email,
//     mobile,
//     date_of_birth,
//     gender,
//     branch,
//     address,
//     batch_hour,
//     batch_minute,
//     batch_period,
//     class_days,
//     course,
//     guardian_number,
//     payment_method,
//     fee_submitted,
//     occupation,
//     heard_about
//   } = req.body;

//   if (!name || !email || !mobile) {
//     return res.status(400).json({
//       message: "Name, Email and Mobile are required"
//     });
//   }

//   const photo = req.file
//     ? `/uploads/images/${req.file.filename}`
//     : null;

//   admissionModel.checkDuplicate(email, mobile, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Database error" });
//     }

//     if (result.length > 0) {
//       return res.json({
//         message: "Student already registered"
//       });
//     }

//     const newAdmission = {
//       name,
//       email,
//       mobile,
//       date_of_birth,
//       gender,
//       branch,
//       address,
//       batch_hour,
//       batch_minute,
//       batch_period,
//       class_days,
//       photo,
//       course,
//       guardian_number,
//       payment_method,
//       fee_submitted,
//       occupation,
//       heard_about
//     };

//     admissionModel.addAdmission(newAdmission, (err, result) => {

//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Insert failed" });
//       }

//       res.json({
//         message: "Admission submitted successfully"
//       });

//     });

//   });

// };


// // UPDATE ADMISSION
// export const updateAdmission = (req, res) => {

//   const id = req.params.id;

//   admissionModel.updateAdmission(id, req.body, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Update failed" });
//     }

//     res.json({
//       message: "Admission updated successfully"
//     });

//   });

// };


// // DELETE ADMISSION
// export const deleteAdmission = (req, res) => {

//   const id = req.params.id;

//   admissionModel.deleteAdmission(id, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Delete failed" });
//     }

//     res.json({
//       message: "Admission deleted successfully"
//     });

//   });

// };
//this is old
// const admissionModel = require("../models/admissionModel");


// // GET ALL ADMISSIONS
// const getAdmissions = (req, res) => {

//   admissionModel.getAdmissions((err, result) => {

//     if (err) {
//       console.error("Get Admissions Error:", err);
//       return res.status(500).json({ message: "Server error" });
//     }

//     res.json(result);

//   });

// };


// // GET SINGLE ADMISSION
// const getAdmissionById = (req, res) => {

//   const id = req.params.id;

//   admissionModel.getAdmissionById(id, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Server error" });
//     }

//     res.json(result);

//   });

// };


// // CREATE ADMISSION
// const createAdmission = (req, res) => {

//   const {
//     name,
//     email,
//     mobile,
//     date_of_birth,
//     gender,
//     branch,
//     address,
//     batch_hour,
//     batch_minute,
//     batch_period,
//     class_days,
//     course,
//     guardian_number,
//     payment_method,
//     fee_submitted,
//     occupation,
//     heard_about
//   } = req.body;

//   if (!name || !email || !mobile) {
//     return res.status(400).json({
//       message: "Name, Email and Mobile are required"
//     });
//   }

//   const photo = req.file
//     ? `/uploads/images/${req.file.filename}`
//     : null;

//   admissionModel.checkDuplicate(email, mobile, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Database error" });
//     }

//     if (result.length > 0) {
//       return res.json({
//         message: "Student already registered"
//       });
//     }

//     const newAdmission = {
//       name,
//       email,
//       mobile,
//       date_of_birth,
//       gender,
//       branch,
//       address,
//       batch_hour,
//       batch_minute,
//       batch_period,
//       class_days,
//       photo,
//       course,
//       guardian_number,
//       payment_method,
//       fee_submitted,
//       occupation,
//       heard_about
//     };

//     admissionModel.addAdmission(newAdmission, (err, result) => {

//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Insert failed" });
//       }

//       res.json({
//         message: "Admission submitted successfully"
//       });

//     });

//   });

// };


// // UPDATE ADMISSION
// const updateAdmission = (req, res) => {

//   const id = req.params.id;

//   admissionModel.updateAdmission(id, req.body, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Update failed" });
//     }

//     res.json({
//       message: "Admission updated successfully"
//     });

//   });

// };


// // DELETE ADMISSION
// const deleteAdmission = (req, res) => {

//   const id = req.params.id;

//   admissionModel.deleteAdmission(id, (err, result) => {

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Delete failed" });
//     }

//     res.json({
//       message: "Admission deleted successfully"
//     });

//   });

// };


// module.exports = {
//   getAdmissions,
//   getAdmissionById,
//   createAdmission,
//   updateAdmission,
//   deleteAdmission
// };


import db from "../config/db.js";

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], (err, result) => {
      if (err) return reject(err);
      resolve(result[0]);
    });

  });
};

// export const findUserById = (id) => {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
//       if (err) return reject(err);
//       resolve(result[0]);
//     });
//   });
// };


export const createUser = (user) => {
  return new Promise((resolve, reject) => {

    const sql = `
      INSERT INTO users (name,email,password)
      VALUES (?,?,?)
    `;

    db.query(
      sql,
      [user.name, user.email, user.password],
      (err, result) => {

        if (err) return reject(err);
        resolve(result);

      }
    );

  });
};
export const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      }
    );
  });
};
import db from "../config/db.js";

// GET ALL
const getBlogs = (callback) => {
  db.query("SELECT * FROM blogs ORDER BY created_at DESC", callback);
};

// GET BY ID
const getBlogById = (id, callback) => {
  db.query("SELECT * FROM blogs WHERE id = ?", [id], callback);
};

// CREATE
const addBlog = (blog, callback) => {
  const sql = `
    INSERT INTO blogs (title, description, image, author)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      blog.title,
      blog.description,
      blog.image,
      blog.author || "Admin" // ✅ default
    ],
    callback
  );
};

// ✅ UPDATE (IMPORTANT)
const updateBlog = (id, blog, callback) => {
  const sql = `
    UPDATE blogs 
    SET title = ?, description = ?, image = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      blog.title,
      blog.description,
      blog.image,
      id
    ],
    callback
  );
};

// DELETE
const deleteBlog = (id, callback) => {
  db.query("DELETE FROM blogs WHERE id = ?", [id], callback);
};

export default {
  getBlogs,
  getBlogById,
  addBlog,
  updateBlog, // ✅ add this
  deleteBlog
};

// import db from "../config/db.js";

// // GET ALL
// const getBlogs = (callback) => {
//   db.query("SELECT * FROM blogs ORDER BY created_at DESC", callback);
// };

// // GET BY ID
// const getBlogById = (id, callback) => {
//   db.query("SELECT * FROM blogs WHERE id = ?", [id], callback);
// };

// // CREATE
// const addBlog = (blog, callback) => {
//   const sql = `
//     INSERT INTO blogs (title, description, image, author)
//     VALUES (?, ?, ?, ?)
//   `;

//   db.query(
//     sql,
//     [blog.title, blog.description, blog.image, blog.author],
//     callback
//   );
// };

// // DELETE
// const deleteBlog = (id, callback) => {
//   db.query("DELETE FROM blogs WHERE id = ?", [id], callback);
// };

// export default {
//   getBlogs,
//   getBlogById,
//   addBlog,
//   deleteBlog
// };
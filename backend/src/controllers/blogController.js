
import blogModel from "../models/blogModel.js";

// GET ALL BLOGS
const getBlogs = (req, res) => {
  blogModel.getBlogs((err, result) => {
    if (err) {
      console.log("ERROR:", err);
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
};

// GET BLOG BY ID
const getBlogById = (req, res) => {
  const id = req.params.id;

  blogModel.getBlogById(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// CREATE BLOG
const createBlog = (req, res) => {
  try {
    console.log("FILES:", req.files); // debug

    const image = req.files?.image
      ? req.files.image[0].path
      : null;

    const newBlog = {
      title: req.body.title,
      description: req.body.description,
      image,
    };

    blogModel.addBlog(newBlog, (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Blog created successfully" });
    });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json(err);
  }
};

// UPDATE BLOG
const updateBlog = (req, res) => {
  const id = req.params.id;

  const image = req.files?.image
    ? req.files.image[0].path
    : req.body.image;

  const updatedBlog = {
    title: req.body.title,
    description: req.body.description,
    image,
  };

  blogModel.updateBlog(id, updatedBlog, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Blog updated successfully" });
  });
};

// DELETE BLOG
const deleteBlog = (req, res) => {
  const id = req.params.id;

  blogModel.deleteBlog(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({ message: "Blog deleted successfully" });
  });
};

export default {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};



// import blogModel from "../models/blogModel.js";

// // GET ALL (public)
// export const getBlogs = (req, res) => {
//   blogModel.getBlogs((err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// };

// // GET BY ID
// export const getBlogById = (req, res) => {
//   const id = req.params.id;

//   blogModel.getBlogById(id, (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// };

// // CREATE (admin)
// export const createBlog = (req, res) => {
//   const image = req.file
//     ? `/uploads/images/${req.file.filename}`
//     : null;

//   const blog = {
//     title: req.body.title,
//     description: req.body.description,
//     image,
//     author: "Admin"
//   };

//   blogModel.addBlog(blog, (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Blog added successfully" });
//   });
// };

// // DELETE
// export const deleteBlog = (req, res) => {
//   const id = req.params.id;

//   blogModel.deleteBlog(id, (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Blog deleted successfully" });
//   });
// };

// export default {
//   getBlogs,
//   getBlogById,
//   createBlog,
//   deleteBlog
// };
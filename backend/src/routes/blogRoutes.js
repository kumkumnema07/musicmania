import express from "express";
import blogController from "../controllers/blogController.js";
import upload from "../config/multer.js";
import ensureAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.get("/blogs", blogController.getBlogs);
router.get("/blogs/:id", blogController.getBlogById);

// PROTECTED
router.post(
  "/blogs",
  ensureAuth,
  upload.fields([
    { name: "image", maxCount: 1 }
  ]),
  blogController.createBlog
);

router.put(
  "/blogs/:id",
  ensureAuth,
  upload.fields([
    { name: "image", maxCount: 1 }
  ]),
  blogController.updateBlog
);
// router.post(
//   "/blogs",
//   ensureAuth,
//   upload.single("image"),
//   blogController.createBlog
// );

// router.put(
//   "/blogs/:id",
//   ensureAuth,
//   upload.single("image"),
//   blogController.updateBlog
// );

router.delete(
  "/blogs/:id",
  ensureAuth,
  blogController.deleteBlog
);

export default router;


// import express from "express";
// const router = express.Router();

// import blogController from "../controllers/blogController.js";
// import upload from "../config/multer.js";
// import ensureAuth from "../middleware/authMiddleware.js";

// // PUBLIC
// router.get("/blogs", blogController.getBlogs);
// router.get("/blogs/:id", blogController.getBlogById);

// // ADMIN
// router.post(
//   "/blogs",
//   ensureAuth,
//   upload.single("image"),
//   blogController.createBlog
// );

// router.delete(
//   "/blogs/:id",
//   ensureAuth,
//   blogController.deleteBlog
// );

// export default router;
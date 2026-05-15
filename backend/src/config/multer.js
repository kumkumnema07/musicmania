import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    console.log("Uploading file:", file.originalname, "to Cloudinary");

    if (file.fieldname === "image") {
      return {
        folder: "courses/images",
        resource_type: "image",
        format: "png", // optional
      };
    }

if (file.fieldname === "photo") {
  return {
    folder: "admissions/images", //  NEW FOLDER
    resource_type: "image",
  };
}

    if (file.fieldname === "pdf") {
      return {
        folder: "courses/pdfs",
        resource_type: "raw",
      };
    }

    //  VERY IMPORTANT (fallback)
    return {
      folder: "courses/others",
      resource_type: "auto",
    };
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    console.log("File filter for:", file.originalname);
    cb(null, true);
  }
});

export default upload;
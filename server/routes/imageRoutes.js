import express from "express";
import multer from "multer";
import {
  uploadImage,
  getImages,
  getImageById,
} from "../controllers/imageController.js";

const router = express.Router();

// Multer configuration
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("File type not supported. Please upload an image."), false);
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

// Routes
router.post("/images", upload.single("image"), uploadImage); // Upload an image
router.get("/images", getImages); // Get all images
router.get("/images/:id", getImageById); // Get a specific image by ID

// Error-handling middleware for Multer
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  } else if (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
});

export default router;

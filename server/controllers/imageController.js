import ImageModel from "../models/ImageModel.js";

// 🟢 Upload Image
export const uploadImage = async (req, res) => {
  try {
    const { originalname, mimetype, buffer } = req.file;

    const image = new ImageModel({
      filename: originalname,
      contentType: mimetype,
      imageBase64: buffer.toString("base64"),
    });

    await image.save();
    res.status(201).json({ message: "Image uploaded successfully!", image });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error });
  }
};

// 🟢 Get All Images
export const getImages = async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};

// 🟢 Get Image by ID
export const getImageById = async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    res.json(image);
  } catch (error) {
    res.status(500).json({ message: "Error fetching image", error });
  }
};

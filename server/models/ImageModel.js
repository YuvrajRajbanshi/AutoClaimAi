import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  imageBase64: String, // Store image in Base64
});

const ImageModel = mongoose.model("Image", ImageSchema);
export default ImageModel;

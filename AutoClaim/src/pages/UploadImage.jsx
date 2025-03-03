import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please select an image!");

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setResult(res.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md text-center"
      >
        <h1 className="text-2xl font-bold mb-4">AutoClaim AI</h1>
        <p className="text-gray-400 mb-4">Upload an image of your vehicle damage for AI analysis.</p>

        <label className="cursor-pointer bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-500 transition">
          Choose Image
          <input type="file" onChange={handleImageUpload} className="hidden" />
        </label>

        {preview && (
          <motion.img
            src={preview}
            alt="Preview"
            className="mt-4 w-full rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <button
          onClick={handleSubmit}
          className={`mt-4 w-full py-2 rounded-lg font-semibold ${
            loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"
          } transition`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>

        {loading && (
          <div className="w-full bg-gray-600 h-2 mt-3 rounded-lg overflow-hidden">
            <motion.div
              className="h-full bg-green-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        )}

        {result && <p className="mt-4 text-green-400">{result}</p>}
      </motion.div>
    </div>
  );
};

export default UploadImage;

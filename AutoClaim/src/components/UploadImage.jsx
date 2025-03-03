import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setUploadStatus("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setUploadStatus(`Upload successful: ${response.data.message}`);
    } catch (error) {
      setUploadStatus("Error uploading image. Please try again.");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <input type="file" onChange={handleImageChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 w-48 h-48 object-cover rounded-lg shadow-md"
        />
      )}
      <button
        onClick={handleUpload}
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        Upload
      </button>
      {uploadStatus && <p className="mt-4">{uploadStatus}</p>}
    </div>
  );
};

export default UploadImage;

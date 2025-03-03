import React from "react";

const ThermalScanner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold">Thermal Scanner</h2>
      <p className="mt-4 text-gray-400 text-center max-w-2xl">
        The **Thermal Scanner** feature allows you to detect **internal vehicle issues**, including **battery overheating and hidden damages**. Upload an infrared image or use the live thermal scanning option to analyze internal heat levels.
      </p>

      <img src="https://source.unsplash.com/800x400/?infrared,thermal" alt="Thermal Scanner"
        className="mt-6 rounded-lg shadow-lg"
      />

      <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Upload Thermal Image
      </button>
    </div>
  );
};

export default ThermalScanner;

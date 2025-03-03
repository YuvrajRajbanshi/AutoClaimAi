import React from "react";
import InteractiveGridPattern from "../components/magicui/InteractiveGridPattern";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <InteractiveGridPattern className="absolute inset-0 opacity-30" />

      <h1 className="text-4xl font-bold z-10">Welcome to AutoClaim AI</h1>
      <p className="mt-4 text-lg text-gray-400 text-center z-10">
        AI-powered vehicle damage detection for faster insurance claims.
      </p>

      <img
        src="https://source.unsplash.com/800x400/?car,accident"
        alt="Car Damage"
        className="mt-6 rounded-lg shadow-lg z-10"
      />

      <Link to="/upload" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 z-10">
        Analyze Damage Now
      </Link>
    </div>
  );
};

export default Home;

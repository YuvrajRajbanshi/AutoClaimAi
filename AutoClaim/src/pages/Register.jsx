import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full p-2 mt-4 bg-gray-700 rounded"/>
        <input type="email" placeholder="Email" className="w-full p-2 mt-4 bg-gray-700 rounded"/>
        <input type="password" placeholder="Password" className="w-full p-2 mt-4 bg-gray-700 rounded"/>
        <button className="mt-4 w-full p-2 bg-green-500 rounded hover:bg-green-600">Sign Up</button>
      </div>
    </div>
  );
};

export default Register;

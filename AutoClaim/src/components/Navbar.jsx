import * as React from "react";
import { Link } from "react-router-dom";
import {
  FaCarCrash,
  FaCameraRetro,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo & Brand Name */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <FaCarCrash className="mr-2 text-red-400" /> AutoClaim AI
        </Link>

        {/* Navigation Menu */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/upload" className="hover:text-blue-400">
            Analyze Damage
          </Link>
          {/* <Link
            to="/thermal-scanner"
            className="text-yellow-400 font-semibold hover:text-yellow-300"
          >
            <FaCameraRetro className="mr-1" /> Thermal Scanner
          </Link> */}
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link to="/login" className="flex items-center hover:text-green-400">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
          <Link
            to="/register"
            className="flex items-center hover:text-yellow-400"
          >
            <FaUserPlus className="mr-1" /> Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

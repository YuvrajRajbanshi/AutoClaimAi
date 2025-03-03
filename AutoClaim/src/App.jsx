import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage.jsx";  // ✅ Correct Import
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ThermalScanner from "./pages/ThermalScanner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/thermal-scanner" element={<ThermalScanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

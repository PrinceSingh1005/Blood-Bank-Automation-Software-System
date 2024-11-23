import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-evenly p-2 bg-transparent">
        <img className="h-16 cursor-pointer" src="logo.png" alt="logo" onClick={() => navigate("/")} />
        <div
          className="flex gap-6 text-lg font-medium text-white p-3 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div onClick={() => navigate("/")} className="cursor-pointer hover:text-red-300 transition-colors">Home</div>
          <div onClick={() => navigate("/aboutUs")} className="cursor-pointer hover:text-red-300 transition-colors">About Us</div>
          <div onClick={() => navigate("/contact")} className="cursor-pointer hover:text-red-300 transition-colors">Contact</div>
          <div onClick={() => navigate("/services")} className="cursor-pointer hover:text-red-300 transition-colors">Services</div>
        </div>
        <div onClick={() => navigate("/auth")} className="p-3 bg-red-500 rounded-lg text-sm font-semibold text-white uppercase cursor-pointer hover:bg-red-600 transition">
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser(); // Access user and logout function from context

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-evenly p-2 bg-transparent">
        {/* Logo */}
        <img
          className="h-16 cursor-pointer"
          src="logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />

        {/* Navigation Links */}
        <div
          className="flex gap-6 text-lg font-medium text-white p-3 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-red-300 transition-colors"
          >
            Home
          </div>
          <div
            onClick={() => navigate("/aboutUs")}
            className="cursor-pointer hover:text-red-300 transition-colors"
          >
            About Us
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-red-300 transition-colors"
          >
            Contact
          </div>
          <div
            onClick={() => navigate("/services")}
            className="cursor-pointer hover:text-red-300 transition-colors"
          >
            Services
          </div>
        </div>

        {/* User Profile / Login */}
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user.profileImage || "default-avatar.png"}
                alt="profile"
                className="w-10 h-10 bg-red-500 rounded-full cursor-pointer border-2 border-red-500 hover:border-red-700"
                title={user.username}
                onClick={() => navigate("/profile")}
              />
              <button
                onClick={logout}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

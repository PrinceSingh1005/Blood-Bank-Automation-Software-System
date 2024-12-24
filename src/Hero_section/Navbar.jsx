import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser(); // Access user and logout function from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0"></div>
      <div className="relative flex items-center justify-between md:justify-evenly p-4 bg-transparent">
        {/* Logo */}
        <img
          className="h-16 cursor-pointer"
          src="logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-20 left-0 w-full md:w-auto flex flex-col md:flex-row gap-6 text-lg font-medium text-white bg-black md:bg-transparent p-5 md:p-3 rounded-lg transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "block" : "hidden md:flex"}`}
          style={isMenuOpen ? {} : { background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}
        >
          <div
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-black hover:text-red-300 transition-colors"
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/Recipient");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-black hover:text-red-400 transition-colors"
          >
            Blood Request
          </div>
          <div
            onClick={() => {
              navigate("/aboutUs");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-black hover:text-red-300 transition-colors"
          >
            About Us
          </div>
          <div
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-black hover:text-red-300 transition-colors"
          >
            Contact
          </div>
          <div
            onClick={() => {
              navigate("/services");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer text-black hover:text-red-300 transition-colors"
          >
            Services
          </div>
        </div>

        {/* User Profile / Login */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
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
            </>
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

      {/* User Profile / Login for Mobile */}
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 md:hidden">
          {user ? (
            <>
              <img
                src={user.profileImage || "default-avatar.png"}
                alt="profile"
                className="w-10 h-10 bg-red-500 rounded-full cursor-pointer border-2 border-red-500 hover:border-red-700"
                title={user.username}
                onClick={() => {
                  navigate("/profile");
                  setIsMenuOpen(false);
                }}
              />
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/auth");
                setIsMenuOpen(false);
              }}
              className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

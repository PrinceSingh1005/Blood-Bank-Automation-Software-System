import React, { useState } from "react";

const MultiRoleLogin = () => {
  const [userRole, setUserRole] = useState("donor"); // Default role
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
    setFormData({ username: "", password: "" }); // Reset form on role change
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role:", userRole);
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
    // Add your login logic here
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Login
        </h2>

        {/* Role Selection */}
        <div className="mb-6">
          <div className="flex justify-between gap-4">
            {["donor", "receiver", "hospital", "organization"].map((role) => (
              <label key={role} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="userRole"
                  value={role}
                  checked={userRole === role}
                  onChange={handleRoleChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="capitalize">{role}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={`Enter your ${userRole} username`}
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <h2 className="p-2">Not registered yet? <span className="text-blue-500 font-semibold cursor-pointer">SignUp</span></h2>
        </form>
      </div>
    </div>
  );
};

export default MultiRoleLogin;

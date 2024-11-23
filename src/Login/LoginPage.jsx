import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userRole, setUserRole] = useState("donor");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate(); 

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
    setFormData({ username: "", password: "" });
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
    console.log(isSignUp ? "SignUp Data" : "Login Data", { userRole, formData });
  
    switch (userRole) {
      case "donor":
        navigate("/donor-dashboard");
        break;
      case "receiver":
        navigate("/receiver-dashboard");
        break;
      case "hospital":
        navigate("/hospital-dashboard");
        break;
      case "organization":
        navigate("/organization-dashboard");
        break;
      default:
        console.error("Unknown role:", userRole);
    }
  };
  

  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {isSignUp ? "SignUp" : "Login"} as {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
        </h2>

                <div className="mb-6">
                    <div className="flex justify-between gap-4 cursor-pointer">
                        {["donor", "receiver", "hospital", "organization"].map((role) => (
                            <label key={role} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="userRole"
                                    value={role}
                                    checked={userRole === role}
                                    onChange={handleRoleChange}
                                    className="text-red-500 focus:ring-red-400"
                                />
                                <span className="capitalize">{role}</span>
                            </label>
                        ))}
                    </div>
                </div>
        <form onSubmit={handleSubmit}>
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
              autoComplete="None"
              required
            />
          </div>
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
              autoComplete="None"
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
          )}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="Phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone"
                required
              />
            </div>
          )}
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="Address"
                className="block text-gray-700 font-medium mb-2"
              >
                Address
              </label>
              <input
                type="address"
                id="address"
                name="address"
                value={formData.address || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            {isSignUp ? "SignUp" : "Login"}
          </button>
          <h2 className="p-2 text-center">
            {isSignUp ? "Already registered?" : "Not registered yet?"}{" "}
            <span
              className="text-red-500 font-semibold cursor-pointer"
              onClick={toggleMode}
            >
              {isSignUp ? "Login" : "SignUp"}
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

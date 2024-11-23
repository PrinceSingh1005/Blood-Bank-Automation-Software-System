import React, { createContext, useState, useContext } from "react";

// Create Context
export const UserContext = createContext();

// Context Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state: null when not logged in

  const login = (userData) => setUser(userData); // Login function
  const logout = () => setUser(null); // Logout function

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for accessing UserContext
export const useUser = () => useContext(UserContext);

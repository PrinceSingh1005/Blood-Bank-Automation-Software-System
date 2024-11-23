import React from "react";
import Navbar from "./Hero_section/Navbar";
const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div> 
        {children}
      </div>
    </div>
  );
};

export default Layout;

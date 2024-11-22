import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Hero_section/FirstPage";
import DonorDashboard from "./Dashboard/Donor";
import Home from "./Hero_section/Home";
import AboutUs from "./Hero_section/AboutUs";
import Contact from "./Hero_section/Contact";
import Services from "./Hero_section/Services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<FirstPage />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

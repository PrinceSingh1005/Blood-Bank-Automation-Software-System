import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./Hero_section/FirstPage";
import DonorDashboard from "./Dashboard/Donor";
import Home from "./Hero_section/Home";
import AboutUs from "./Hero_section/AboutUs";
import Contact from "./Hero_section/Contact";
import Services from "./Hero_section/Services";
import Receiver from "./Dashboard/Reciever";
import Recipient from "./Hero_section/Recipient";
import Admin from "./Dashboard/Admin";

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipient" element={<Recipient />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<FirstPage />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/Receiver-dashboard" element={<Receiver />} />
        <Route path="/Admin-dashboard" element={<Admin />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;

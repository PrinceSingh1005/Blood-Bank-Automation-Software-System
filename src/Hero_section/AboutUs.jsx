import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-10 bg-gradient-to-b from-red-50 to-red-200">
        <h1 className="text-5xl font-bold mt-16 mb-3 mx-auto boarder border-b-4 border-red-500">About Us</h1>
      <div className="flex items-center justify-evenly h-full text-center">
        <div className="w-3/5 text-center">
        <p className="text-lg leading-relaxed max-w-3xl mb-8">
          Welcome to **BloodConnect**, a platform dedicated to saving lives by
          connecting those in need of blood with compassionate donors. Our mission is to
          build a bridge between donors and recipients, fostering a community of
          humanity and hope.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed max-w-2xl mb-8">
          We aim to ensure that no life is lost due to the unavailability of blood. By
          streamlining the blood donation process and providing quick and reliable
          access to donors, we make it easier for those in need to find help.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left max-w-2xl text-lg mb-8">
          <li>Easy-to-use platform for donors and recipients.</li>
          <li>Reliable database of verified donors and blood banks.</li>
          <li>Dedicated support for hospitals and organizations.</li>
          <li>Community-driven approach to saving lives.</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
        <p className="text-lg leading-relaxed max-w-2xl mb-8">
          Whether you're a donor, a recipient, or a healthcare organization, you
          have a role to play in this mission. Together, we can create a network
          of hope and make a difference in countless lives.
        </p>
        <button onClick={()=>{navigate("/auth")}} className="p-4 bg-red-500 rounded-lg text-xl uppercase hover:bg-red-600 transition-colors">
          Become a Donor
        </button>
        </div>
        <div className="h-full p-8">
            <img className="h-full" src="about.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;

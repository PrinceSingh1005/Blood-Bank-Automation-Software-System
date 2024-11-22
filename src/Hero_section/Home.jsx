import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="home flex flex-row gap-24 h-fit justify-center items-center p-3 absolute right-1/3 top-0 z-10">
        <img className="h-32" src="logo.png" alt="logo" />
        <div
          className="menu flex gap-8 text-2xl font-medium text-white p-4 rounded-xl"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div onClick={() => { navigate("/") }} className="cursor-pointer">Home</div>
          <div onClick={() => { navigate("/aboutUs") }} className="cursor-pointer">About Us</div>
          <div onClick={() => { navigate("/contact") }} className="cursor-pointer">Contact</div>
          <div onClick={() => { navigate("/services") }} className="cursor-pointer">Services</div>
        </div>
        <div>
          <div onClick={() => { navigate("/auth") }} className="p-4 bg-red-500 rounded-lg text-xl uppercase cursor-pointer">Login</div>
        </div>
      </div>

      <div className="para w-1/3 text-white z-10">
        <p className="text-5xl font-bold uppercase">Donate blood and get real blessings.</p>
        <p className="text-xl mt-4">
          Blood is the most precious gift that anyone can give to another person.
          Donating blood not only saves the life but also saves the donor's lives.
        </p>
        <button onClick={() => { navigate("/auth") }} className="p-4 bg-red-500 rounded-lg text-xl uppercase mt-8">Donate Now</button>
      </div>
      <style>
        {`
          @keyframes growBackground {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
              }
              100% {
                transform: scale(1.1);
                }
          }
        `}
      </style>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("blood.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          animation: "growBackground 8s ease-out forwards",
        }}
      ></div>
      
    </div>
  );
};

export default Home;

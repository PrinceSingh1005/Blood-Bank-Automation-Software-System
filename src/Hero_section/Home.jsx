import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col justify-center items-center absolute overflow-hidden ">
      <div className="text-center w-4/5 md:w-2/3 lg:w-1/2 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">
          Donate blood and get real blessings.
        </h1>
        <p className="text-lg md:text-xl mt-6">
          Blood is the most precious gift that anyone can give to another person. Donating blood not only saves the life but also saves the donor's lives.
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="mt-8 px-6 py-3 bg-red-500 text-lg font-medium rounded-lg uppercase shadow-md hover:bg-red-600 transition"
        >
          Donate Now
        </button>
      </div>

      <style>
        {`
          @keyframes growBackground {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("blood.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "growBackground 8s ease-in-out infinite",
        }}
      ></div>
    </div>
  );
};

export default Home;

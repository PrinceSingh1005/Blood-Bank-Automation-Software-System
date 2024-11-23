import React, { useState } from "react";
import Calendar from "./Calender";
import { useNavigate } from "react-router-dom";

const Donor = () => {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setClose(!close);
  };

  return (
    <div className="max-h-fit bg-gray-100 flex flex-col pt-24 p-4">
      {/* Sidebar */}
      <div className="flex">
        <aside
          className={`${
            close ? "w-12" : "w-1/6"
          } bg-white shadow-md p-4 transition-all duration-300 ease-in-out`}
        >
          <div className="flex gap-4 items-center mb-8">
            <button
              onClick={toggle}
              className="text-gray-600 hover:text-gray-800 p-1 rounded"
            >
              <span className="material-icons">menu</span>
            </button>
            {!close && (
              <h1 className="text-xl font-bold text-red-700">Donor Dashboard</h1>
            )}
          </div>
          <nav className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 cursor-pointer w-fit">
              <span className="material-icons">dashboard</span>
              {!close && "Dashboard"}
            </div>
            <div className="flex items-center gap-3 text-red-600 cursor-pointer w-fit">
              <span className="material-icons">favorite</span>
              {!close && "Donations"}
            </div>
            <div className="flex items-center gap-3 text-red-600 cursor-pointer w-fit">
              <span className="material-icons">settings</span>
              {!close && "Settings"}
            </div>
            <div onClick={() => navigate("/auth")} className="flex items-center gap-3 text-red-600 cursor-pointer w-fit">
              <span className="material-icons">logout</span>
              {!close && "Logout"}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome, Mr. Prince Singh
            </h2>
            <div className="flex gap-4">
              <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                This Week
              </div>
              <div className="bg-white shadow-md p-2 rounded-full">
                <span className="material-icons">notifications</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <h3 className="text-gray-600">Heart Rate</h3>
              <p className="text-2xl font-bold text-gray-600">102 bpm</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <h3 className="text-gray-600">Temperature</h3>
              <p className="text-2xl font-bold">36.6°C</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <h3 className="text-gray-600">Blood Pressure</h3>
              <p className="text-2xl font-bold text-blue-600">120/80</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <h3 className="text-gray-600">Glucose</h3>
              <p className="text-2xl font-bold text-green-600">90 mg/dL</p>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Left: Water & General Health */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-gray-600">Water Balance</h3>
              <p className="text-4xl font-bold text-blue-600">42%</p>
              <p className="text-sm text-gray-500">50% less than last week</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-gray-600">General Health</h3>
              <p className="text-4xl font-bold text-yellow-600">61%</p>
              <p className="text-sm text-gray-500">Improved from last week</p>
            </div>
          </div>

          {/* Activity Analytics */}
          <div className="bg-white shadow-md p-6 mt-6 rounded-lg">
            <h3 className="text-gray-600 mb-4">Activity Analytics</h3>
            <div className="h-32 bg-gray-200 rounded-lg flex justify-center items-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/6 bg-white shadow-md px-4">
          <div className="flex flex-col items-center">
            <img
              src="pic.png"
              alt="profile"
              className="w-24 h-24 rounded-full mb-4 bg-red-500"
            />
            <h3 className="text-xl font-semibold text-red-800">Prince Singh</h3>
            <p className="text-sm text-red-600">21 years</p>
          </div>
          <div>
            <Calendar />
          </div>
          <div className="mt-2 pb-4">
            <p className="text-red-500 mb-2">Next Appointments</p>
            <ul className="space-y-4">
              <li className="bg-red-100 p-4 rounded-lg text-sm text-red-700">
                Dentist - 10:00 AM
              </li>
              <li className="bg-blue-100 p-4 rounded-lg text-sm text-blue-700">
                Oculist - 11:45 AM
              </li>
              <li className="bg-red-100 p-4 rounded-lg text-sm text-red-700">
                Cardiologist - 02:00 PM
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Donor;

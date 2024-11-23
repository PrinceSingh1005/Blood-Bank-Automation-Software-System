import React from "react";

const Receiver = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-32">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white rounded-lg shadow-md p-4 float-left">
        <div className="mb-8">
          <img src="logo.png" alt="logo" className="w-32 mx-auto" />
        </div>
        <nav className="space-y-4 text-gray-600">
          <div className="flex items-center p-2 hover:bg-red-50 hover:text-red-500 cursor-pointer rounded-lg">
            <span className="material-icons">dashboard</span>
            <span className="ml-4">Dashboard</span>
          </div>
          <div className="flex items-center p-2 hover:bg-red-50 hover:text-red-500 cursor-pointer rounded-lg">
            <span className="material-icons">notifications</span>
            <span className="ml-4">Alerts</span>
          </div>
          <div className="flex items-center p-2 hover:bg-red-50 hover:text-red-500 cursor-pointer rounded-lg">
            <span className="material-icons">analytics</span>
            <span className="ml-4">Analytics</span>
          </div>
          <div className="flex items-center p-2 hover:bg-red-50 hover:text-red-500 cursor-pointer rounded-lg">
            <span className="material-icons">people</span>
            <span className="ml-4">Donors</span>
          </div>
          <div className="flex items-center p-2 hover:bg-red-50 hover:text-red-500 cursor-pointer rounded-lg">
            <span className="material-icons">local_hospital</span>
            <span className="ml-4">Patients</span>
          </div>
        </nav>
        <button className="mt-10 p-2 bg-red-500 text-white rounded-lg w-full">
          Add New Patient
        </button>
        <div className="mt-10 text-gray-500">
          <h6>Remember</h6>
          <p>To keep your contact status updated.</p>
          <p className="text-sm mt-2">Last Update: 18.08.2019</p>
          <button className="text-red-500 mt-4">Check the data</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[20%] p-6 space-y-6">
        {/* Status Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Units Status</h3>
            <div className="mt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Blood Needed</span>
                <span className="font-bold text-red-500">A+</span>
              </div>
              <div className="flex justify-between">
                <span>Window</span>
                <span className="font-bold text-red-500">O+</span>
              </div>
              <button className="mt-4 text-red-500 underline">See full list</button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Donors Checkup</h3>
            <div className="mt-4">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg text-white">
                <h4 className="font-bold">Alex Perez</h4>
                <p>Hemoglobin: Good</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">PCR Cycle</h3>
            <div className="mt-4">
              <p className="text-xl font-bold text-red-500">65%</p>
              <p className="text-sm text-gray-500">Time to cycle end: 00:23 min</p>
            </div>
          </div>
        </div>

        {/* Tests to Order Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-700">Tests to Order</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <input type="text" placeholder="Basic morphology" className="p-2 border rounded-lg" />
            <input type="text" placeholder="Potassium" className="p-2 border rounded-lg" />
            <input type="text" placeholder="Antibodies" className="p-2 border rounded-lg" />
            <input type="text" placeholder="Blood Type" className="p-2 border rounded-lg" />
            <input type="text" placeholder="RCT Markers" className="p-2 border rounded-lg" />
          </div>

          {/* Orders List */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Sallie Green"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-medium">Sallie Green</h4>
                  <p className="text-sm text-gray-500">Basic morphology</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-red-500 text-white rounded-lg p-2">
                Apply Test
              </button>
            </div>
            {/* Additional cards for other users */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Receiver;

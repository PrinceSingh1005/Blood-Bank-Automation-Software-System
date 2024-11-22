import React from "react";

const Donor = () => {
  // Example donor data
  const donor = {
    name: "John Doe",
    email: "john.doe@example.com",
    bloodGroup: "O+",
    lastDonationDate: "2023-10-15",
    donationHistory: [
      { date: "2023-10-15", type: "Whole Blood", location: "Community Center" },
      { date: "2023-08-20", type: "Plasma", location: "City Hospital" },
      { date: "2023-06-10", type: "Platelets", location: "Health Clinic" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-3xl font-bold text-red-600 text-center mb-6 boarder border-b-4 border-red-500">Donor Dashboard</div>

        <div className="flex flex-row justify-around">
          <div >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700">Donor Information</h3>
              <div className="mt-4">
                <p className="text-lg text-gray-600"><strong>Name:</strong> {donor.name}</p>
                <p className="text-lg text-gray-600"><strong>Email:</strong> {donor.email}</p>
                <p className="text-lg text-gray-600"><strong>Blood Group:</strong> {donor.bloodGroup}</p>
                <p className="text-lg text-gray-600"><strong>Last Donation Date:</strong> {donor.lastDonationDate}</p>
              </div>
            </div>

            {/* Donation History Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700">Donation History</h3>
              <ul className="mt-4">
                {donor.donationHistory.map((donation, index) => (
                  <li key={index} className="flex justify-between mb-4">
                    <div className="text-lg text-gray-600">
                      <p><strong>Date:</strong> {donation.date}</p>
                      <p><strong>Type:</strong> {donation.type}</p>
                      <p><strong>Location:</strong> {donation.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule Next Donation Section */}
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Schedule Next Donation</h3>
              <p className="text-lg text-gray-600 mb-4">
                You are eligible to donate again in <strong>4 weeks</strong> from your last donation date.
              </p>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all">
                Schedule Donation
              </button>
            </div>
          </div>
        <div>
          <img className="rounded-full w-64" src="Photo.jpg" alt="Photo" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;

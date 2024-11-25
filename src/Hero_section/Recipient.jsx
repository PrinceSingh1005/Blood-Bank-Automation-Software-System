import React, { useState } from "react";

const Recipient = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    urgency: "Normal",
  });
  const [availability, setAvailability] = useState(null);
  const [trackingStatus, setTrackingStatus] = useState("Pending");
  const [notifications, setNotifications] = useState([]);

  // Simulated blood availability data
  const bloodAvailability = {
    "A+": { available: true, estimatedTime: "2 hours" },
    "B+": { available: false, estimatedTime: "N/A" },
    "O+": { available: true, estimatedTime: "30 minutes" },
    "AB-": { available: false, estimatedTime: "N/A" },
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkAvailability = () => {
    const result = bloodAvailability[formData.bloodGroup];
    setAvailability(result || { available: false, estimatedTime: "N/A" });
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.bloodGroup) {
      setNotifications([
        ...notifications,
        { type: "error", message: "Please fill out all fields." },
      ]);
      return;
    }

    // Simulate request submission and tracking
    setTrackingStatus("Request Submitted");
    setNotifications([
      ...notifications,
      { type: "success", message: "Blood request submitted successfully!" },
    ]);
  };

  return (
    <div className="max-h-fit bg-gray-100 flex flex-col px-6 py-24 space-y-6">
      {/* Header */}
      <header className="text-2xl font-bold text-center text-red-600">
        Recipient Interface
      </header>

      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Blood Request Form */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Blood Request Form</h2>
          <form onSubmit={handleSubmitRequest} className="space-y-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full border-gray-300 rounded p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Required Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleFormChange}
                className="w-full border-gray-300 rounded p-2"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600">Urgency Level</label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleFormChange}
                className="w-full border-gray-300 rounded p-2"
              >
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Blood Availability Check */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Blood Availability Check</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleFormChange}
                className="w-full border-gray-300 rounded p-2"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <button
              onClick={checkAvailability}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Check Availability
            </button>
            {availability && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <p>
                  <strong>Available:</strong>{" "}
                  {availability.available ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Estimated Fulfillment Time:</strong>{" "}
                  {availability.estimatedTime}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Request Tracking */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Request Tracking</h2>
          <div className="p-4 bg-gray-100 rounded">
            <p>
              <strong>Status:</strong> {trackingStatus}
            </p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className={`p-4 rounded ${
                notification.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipient;

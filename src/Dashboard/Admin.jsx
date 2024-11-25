import React, { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [donors, setDonors] = useState([
    { id: 1, name: "Prince Singh", bloodGroup: "A+", contact: "9876543210" },
  ]);
  const [recipients, setRecipients] = useState([
    { id: 1, name: "Prince Singh", bloodGroup: "B+", status: "Pending" },
  ]);
  const [inventory, setInventory] = useState([
    { id: 1, bloodGroup: "A+", units: 10, expiry: "2024-12-31" },
  ]);

  const [reports, setReports] = useState([]);

  const addDonor = () => {
    const newDonor = { id: Date.now(), name: "New Donor", bloodGroup: "O-", contact: "1234567890" };
    setDonors([...donors, newDonor]);
  };

  const deleteDonor = (id) => {
    setDonors(donors.filter((donor) => donor.id !== id));
  };

  const approveRecipient = (id) => {
    setRecipients(
      recipients.map((recipient) =>
        recipient.id === id ? { ...recipient, status: "Approved" } : recipient
      )
    );
  };

  const addInventory = () => {
    const newInventory = {
      id: Date.now(),
      bloodGroup: "AB+",
      units: 5,
      expiry: "2024-11-30",
    };
    setInventory([...inventory, newInventory]);
  };

  const deleteInventory = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const generateReport = () => {
    const newReport = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      summary: "Report generated with current donor and recipient data.",
    };
    setReports([...reports, newReport]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pt-20">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 px-6 text-2xl font-bold">
        Admin Dashboard
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white shadow-md p-4">
          <nav className="space-y-4">
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "dashboard" ? "bg-red-600 text-white" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "donors" ? "bg-red-600 text-white" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("donors")}
            >
              Manage Donors
            </button>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "recipients" ? "bg-red-600 text-white" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("recipients")}
            >
              Manage Recipients
            </button>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "inventory" ? "bg-red-600 text-white" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("inventory")}
            >
              Blood Inventory
            </button>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "reports" ? "bg-red-600 text-white" : "text-gray-800"
              }`}
              onClick={() => setActiveTab("reports")}
            >
              Reports Dashboard
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <h3 className="text-gray-600">Total Donors</h3>
                  <p className="text-2xl font-bold">{donors.length}</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <h3 className="text-gray-600">Total Recipients</h3>
                  <p className="text-2xl font-bold">{recipients.length}</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <h3 className="text-gray-600">Available Blood Units</h3>
                  <p className="text-2xl font-bold">
                    {inventory.reduce((sum, item) => sum + item.units, 0)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Manage Donors */}
          {activeTab === "donors" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Manage Donors</h2>
              <button
                onClick={addDonor}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
              >
                Add Donor
              </button>
              <ul>
                {donors.map((donor) => (
                  <li
                    key={donor.id}
                    className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-2"
                  >
                    <span>
                      {donor.name} - {donor.bloodGroup} - {donor.contact}
                    </span>
                    <button
                      onClick={() => deleteDonor(donor.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Manage Recipients */}
          {activeTab === "recipients" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Manage Recipients</h2>
              <ul>
                {recipients.map((recipient) => (
                  <li
                    key={recipient.id}
                    className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-2"
                  >
                    <span>
                      {recipient.name} - {recipient.bloodGroup} - {recipient.status}
                    </span>
                    <button
                      onClick={() => approveRecipient(recipient.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Approve
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Blood Inventory */}
          {activeTab === "inventory" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Blood Inventory</h2>
              <button
                onClick={addInventory}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
              >
                Add Stock
              </button>
              <ul>
                {inventory.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.bloodGroup} - {item.units} units - Expiry: {item.expiry}
                    </span>
                    <button
                      onClick={() => deleteInventory(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reports Dashboard */}
          {activeTab === "reports" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Reports Dashboard</h2>
              <button
                onClick={generateReport}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
              >
                Generate Report
              </button>
              <ul>
                {reports.map((report) => (
                  <li key={report.id} className="bg-white shadow-md p-4 rounded-lg mb-2">
                    <p>{report.date}</p>
                    <p>{report.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;

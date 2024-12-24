Blood Donation Automation System
Overview
The Blood Donation Automation System is a streamlined platform that connects donors and recipients while automating key aspects of blood inventory management. Designed with Indian references, this system is built to ensure cost-effectiveness, efficiency, and scalability.

Key Features
Donor Interface
Dashboard: Personalized stats and donation history.
Appointments: Book and manage donation slots.
Health Tracking: View health metrics like blood pressure and glucose levels.
Recipient Interface
Blood Request Form: Submit details like required blood group and urgency level.
Blood Availability Check: Displays availability and estimated fulfillment times.
Request Tracking: Monitor the status of requests.
Notifications: Get updates on approvals or availability issues.
Admin Interface
Donor Management: Add, update, and delete donor records.
Recipient Management: Review and verify recipient eligibility.
Blood Inventory: Track, update, and remove expired units.
Reports Dashboard: Generate reports on donors, recipients, and inventory.
Tech Stack
Frontend: React, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Other Libraries: Axios, Node-Schedule
Project Specifications
Parameter	Details
Function Points (FP)	67 (MVP version)
Budget	₹8,00,000
Timeline	3 months (~67 working days)
Team Size	4 (Backend, Frontend, QA, Manager)
Scope of MVP (Minimum Viable Product)
Core Features Only:

Blood Request Management
Donor and Recipient CRUD Operations
Minimal Reporting (stock summaries)
Basic Dashboard
Deferred Features (Planned for future updates):

Advanced analytics and reporting.
Detailed system logs and complex inventory management.
Real-time notifications.
How to Run the Project
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-repo/blood-donation-automation.git  
cd blood-donation-automation  
2. Install Dependencies
Install backend dependencies:

bash
Copy code
cd backend  
npm install  
Install frontend dependencies:

bash
Copy code
cd frontend  
npm install  
3. Set Up MongoDB
Ensure MongoDB is running locally or use a cloud MongoDB service like Atlas.
Update the connection URI in backend/.env.
4. Run the Project
Start the backend server:

bash
Copy code
cd backend  
npm start  
Start the frontend server:

bash
Copy code
cd frontend  
npm start  
Access the application at: http://localhost:3000

Project Layout
bash
Copy code
blood-donation-automation/  
├── backend/  
│   ├── controllers/         # Business logic  
│   ├── models/              # Database schemas  
│   ├── routes/              # API routes  
│   ├── utils/               # Helper functions  
│   ├── server.js            # Main server entry point  
│   └── .env                 # Environment variables  
├── frontend/  
│   ├── src/  
│   │   ├── components/      # Reusable UI components  
│   │   ├── pages/           # Application pages  
│   │   ├── App.js           # Main app entry point  
│   └── package.json         # Frontend dependencies  
└── README.md                # Project documentation  
Future Scope
Mobile App: Extend functionality to mobile platforms.
AI Integration: Predict blood demand based on historical data.
Payment Gateway: Enable online donations for blood banks.
Contributors
Prince Singh – Project Manager
Sheru – QA Support
And the amazing developer team!
License
This project is licensed under the MIT License.

Feel free to contribute to the project! 😊

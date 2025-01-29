#  Installation Guide - Passport Analytical System

This guide provides step-by-step instructions to set up and run the **Passport Analytical System** on your local machine.

---

##  Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)
- **MongoDB** (v6 or later) - [Download Here](https://www.mongodb.com/)
- **Git** - [Download Here](https://git-scm.com/)
- **NPM or Yarn** (Package managers)

---

##  1️ Clone the Repository

```bash
git clone https://github.com/your-username/Passport-Analysis-System.git
cd Passport-Analysis-System
```

---

##  2️ Backend Setup

###  Navigate to the Backend Directory
```bash
cd backend
```

###  Install Dependencies
```bash
npm install
```

###  Configure Environment Variables
Create a `.env` file in the `backend/` directory and add the following:

```
PORT=8080
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/passportDB?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
NODE_ENV=development
```

> **Note:** Replace `your-username`, `your-password`, and `your_secret_key` with actual values.

###  Start the Backend Server
```bash
npm start
```
The server should now be running on **http://localhost:8080**.

---

##  3️ Frontend Setup

###  Navigate to the Frontend Directory
```bash
cd ../frontend
```

###  Install Dependencies
```bash
npm install
```

###  Start the Frontend React App
```bash
npm start
```
The React app should now be running on **http://localhost:3000**.

---

##  4️ MongoDB Setup

###  If using **local MongoDB**, start the MongoDB service:
```bash
mongod
```

###  If using **MongoDB Atlas**, ensure you have set up a cluster and updated the `MONGO_URI` in `.env`.

###  Import Sample Data (Optional)
```bash
mongoimport --uri "your_mongodb_connection_string" --collection users --file data/users.json --jsonArray
mongoimport --uri "your_mongodb_connection_string" --collection passports --file data/passports.json --jsonArray
```

---

##  5️ Testing API Endpoints

Use **Postman** or **cURL** to test API endpoints.

###  Example: Test User Registration
```bash
curl -X POST http://localhost:8080/api/register -H "Content-Type: application/json" -d '{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "mobile": "9876543210"
}'
```

If successful, you'll receive a response with a **JWT token**.

---

##  6️ Stop the Application

To stop the backend and frontend servers, use:

```bash
CTRL + C
```

---

##  Troubleshooting

| Issue | Solution |
|--------|---------|
| `MongoDB connection error` | Check if MongoDB is running and verify `MONGO_URI` in `.env` |
| `Port already in use` | Change `PORT` in `.env` or stop other processes using the port |
| `npm install fails` | Run `npm cache clean --force` and try again |

---

##  Next Steps

-  Explore the API using **Postman**.
-  Modify the frontend UI in `/frontend/src`.
-  Deploy the project on **Heroku** or **Vercel**.

---

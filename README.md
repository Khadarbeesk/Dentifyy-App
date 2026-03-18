# 🦷 Dentist Appointment Booking Platform

---

## 📌 Description

A full-stack MERN application that allows users to browse dentists, book appointments, and view bookings through an admin panel.

---

## 🚀 Live Demo

🌐 Frontend: https://dentify-app.netlify.app/
🔗 Backend: https://dentist-backend-iam4.onrender.com
💻 GitHub: https://github.com/Khadarbeesk/dentist-app

---

## 📸 Screenshots

### 🏠 Home Page

## 📄 Pages & UI Preview

### 🏠 Home Page
![Home](./screenshots/home.png)

### 🔐 Login Page
![Login](./screenshots/login.png)

### 📝 Register Page
![Register](./screenshots/register.png)

### 🧑‍⚕️ Doctors Listing
![Doctors](./screenshots/doctorslisting.png)

### 📅 Booking Page
![Booking](./screenshots/booking.png)

### 🛠️ Admin Dashboard
![Admin](./screenshots/admin.png)

---

## 💡 Key Highlights

* Clean and modular MERN architecture
* JWT-based secure authentication system
* Role-based access control (User/Admin)
* Optimized UI using Tailwind CSS
* Pagination and filtering for better user experience
* Fully responsive design (mobile + desktop)

---

## 📌 Features

### 👤 User Features

* Browse list of dentists
* View dentist details (photo, name, experience, clinic, location, book appointment button)
* Book appointments (patient name, age, gender, appointment date, slot - bonus feature)
* Pagination (bonus feature)
* Filtering by name (bonus feature)
* Responsive UI

### 🔐 Authentication

* User registration & login
* JWT-based authentication
* Role-based access (User / Admin)

### 🛠️ Admin Features

* Secure admin login
* View all appointments (patient name, age, gender, appointment date, dentist name, clinic name, slot)

---

## 🧰 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* RESTful API

### Deployment

* Frontend → Netlify
* Backend → Render

---

## 📡 API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login

### Appointments

POST /api/appointments
GET /api/appointments

### Dentists

GET /api/dentists

---



## ⚙️ Installation & Setup

### 🔐 Environment Variables

Create a `.env` file in backend and add:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000

### Clone Repository

git clone https://github.com/Khadarbeesk/dentist-app.git

### Backend Setup

cd backend
npm install
node server.js

### Frontend Setup

cd frontend
npm install
npm start

---

## 🔒 Security

* Passwords are securely hashed
* JWT tokens used for authentication
* Protected routes for admin access

---

## 🔑 Demo Credentials

**Admin Login**
Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: 1234

---

## ⚠️ Important Note

Admin credentials are pre-defined for demo purposes.
Users cannot self-register as admin.

---

## 🚀 Future Improvements

* Payment integration
* Email/SMS notifications
* Appointment cancellation & rescheduling
* Doctor availability calendar

---

## 👨‍💻 Author

**Khadarbee Shaik**
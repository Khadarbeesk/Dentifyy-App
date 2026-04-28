const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ FIRST CREATE APP

const Dentist = require("./models/Dentist");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/api/payment", require("./routes/paymentRoutes"));

// ROUTES (AFTER app created)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/dentists", require("./routes/dentistRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

// ✅ CONNECT DB
mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log("DB Connected");

  const count = await Dentist.countDocuments();

  if (count === 0) {
    await Dentist.insertMany([
      {
        name: "Dr. Rahul Sharma",
        qualification: "BDS",
        experience: 6,
        clinicName: "Smile Dental",
        address: "MG Road",
        location: "Bangalore",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        name: "Dr. Priya Reddy",
        qualification: "MDS Orthodontist",
        experience: 8,
        clinicName: "Happy Teeth",
        address: "Banjara Hills",
        location: "Hyderabad",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        name: "Dr. Arjun Mehta",
        qualification: "BDS",
        experience: 5,
        clinicName: "Care Dental",
        address: "Indiranagar",
        location: "Bangalore",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        name: "Dr. Sneha Kapoor",
        qualification: "MDS",
        experience: 10,
        clinicName: "Smile Studio",
        address: "Andheri",
        location: "Mumbai",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
      },
      {
        name: "Dr. Kiran Kumar",
        qualification: "BDS",
        experience: 7,
        clinicName: "Dental Hub",
        address: "Gachibowli",
        location: "Hyderabad",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        name: "Dr. Neha Sharma",
        qualification: "MDS",
        experience: 9,
        clinicName: "Perfect Smile",
        address: "Sector 18",
        location: "Noida",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
      },
      {
        name: "Dr. Rohit Verma",
        qualification: "BDS",
        experience: 6,
        clinicName: "City Dental",
        address: "Connaught Place",
        location: "Delhi",
        image: "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        name: "Dr. Ayesha Khan",
        qualification: "MDS",
        experience: 11,
        clinicName: "Elite Dental",
        address: "Koramangala",
        location: "Bangalore",
        image: "https://randomuser.me/api/portraits/women/8.jpg"
      },
      {
        name: "Dr. Vikram Singh",
        qualification: "BDS",
        experience: 8,
        clinicName: "Advanced Dental",
        address: "Chandni Chowk",
        location: "Delhi",
        image: "https://randomuser.me/api/portraits/men/9.jpg"
      }
    ]);

    console.log("✅ 9 Doctors Inserted");
  }

})
.catch(err => console.log(err));

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});
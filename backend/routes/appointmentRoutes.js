const router = require("express").Router();
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const admin = require("../middleware/admin"); // ✅ ADD THIS

// ==============================
// CREATE
// ==============================
router.post("/", auth, async (req, res) => {
  try {
    const { date, time, dentistName } = req.body;

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const exists = await Appointment.findOne({
      dentistName,
      date: selectedDate,
      time
    });

    if (exists) {
      return res.status(400).json({ msg: "Slot already booked ❌" });
    }

    const newAppointment = new Appointment({
      ...req.body,
      date: selectedDate,
      userId: req.user.id
    });

    await newAppointment.save();

    res.json({ msg: "Appointment booked successfully ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ==============================
// USER BOOKINGS
// ==============================
router.get("/my", auth, async (req, res) => {
  try {
    console.log("USER ID:", req.user.id);

    const data = await Appointment.find({
      userId: new mongoose.Types.ObjectId(req.user.id)
    });

    console.log("RESULT:", data);

    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ==============================
// DOCTOR BOOKINGS
// ==============================
router.get("/doctor", auth, async (req, res) => {
  try {
    const data = await Appointment.find({
      dentistName: req.user.name
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching doctor appointments" });
  }
});

// ==============================
// 🔥 ADMIN - ALL BOOKINGS (ADD THIS)
// ==============================
router.get("/", auth, admin, async (req, res) => {
  try {
    const data = await Appointment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching all appointments" });
  }
});

module.exports = router;
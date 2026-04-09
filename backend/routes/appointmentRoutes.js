const router = require("express").Router();
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// ✅ CREATE APPOINTMENT
router.post("/", auth, async (req, res) => {
  try {
    // ❌ removed console.log

    const { date, time, dentistName } = req.body;

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const newAppointment = new Appointment({
      ...req.body,
      date: selectedDate
    });

    await newAppointment.save();

    res.json({ msg: "Appointment booked successfully" });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ GET ALL APPOINTMENTS (ADMIN ONLY)
router.get("/", auth, admin, async (req, res) => {
  try {
    const data = await Appointment.find().sort({ date: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching appointments" });
  }
});

router.delete("/delete-all", async (req, res) => {
  try {
    await Appointment.deleteMany({});
    res.json({ msg: "All appointments deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting appointments" });
  }
});
module.exports = router;
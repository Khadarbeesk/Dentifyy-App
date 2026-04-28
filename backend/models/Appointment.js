const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  age: Number,
  gender: String,
  date: Date,
  time: String,
  dentistName: String,
  clinicName: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
const mongoose = require("mongoose");

const dentistSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  experience: Number,
  clinicName: String,
  address: String,
  location: String,
  image: String
});

module.exports = mongoose.model("Dentist", dentistSchema);
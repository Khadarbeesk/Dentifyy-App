const router = require("express").Router();
const Dentist = require("../models/Dentist");

// GET dentists
router.get("/", async (req, res) => {
  const data = await Dentist.find();
  res.json(data);
});

// ADD dentist
router.post("/", async (req, res) => {
  const dentist = new Dentist(req.body);
  await dentist.save();
  res.json(dentist);
});

module.exports = router;
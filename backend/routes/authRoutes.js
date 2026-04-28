const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  // ✅ ROLE LOGIC
  let role = "user";
  if (email === "admin@gmail.com") {
    role = "admin";
  }

  await new User({ name, email, password: hashed, role }).save();

  res.json({ msg: "Registered" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.json({ msg: "Wrong password" });

 const token = jwt.sign(
  { id: user._id, role: user.role, name: user.name },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.json({
  token,
  user
});
});

module.exports = router;
const router = require("express").Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET"
});

// ✅ CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 50000, // ₹500 (in paise)
      currency: "INR",
      receipt: "receipt_123"
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (err) {
    res.status(500).json({ msg: "Error creating order" });
  }
});

module.exports = router;
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // ✅ FIX: Extract token properly
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {
      return res.status(401).json({ msg: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ⚠️ use your JWT secret
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
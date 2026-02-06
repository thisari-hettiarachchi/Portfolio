import jwt from "jsonwebtoken";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123", 
};

export const adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("Login attempt:", { username, hasPassword: !!password });

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined!");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { username, role: "admin" },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

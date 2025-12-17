const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://portfolioUser:Thisari2101@cluster0.jbobse8.mongodb.net/portfolioDB"
)

.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  role: String,
  message: String,
  image: { type: String, default: "https://i.pravatar.cc/150?img=12" },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.get("/feedbacks", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  const normalized = feedbacks.map(fb => {
    const obj = fb.toObject();
    return {
      ...obj,
      role: obj.role || obj.title || "",
      message: obj.message || obj.feedback || ""
    };
  });
  res.json(normalized);
});

app.post("/feedbacks", async (req, res) => {
  console.log('POST /feedbacks body:', req.body);
  const { name, role, message, image } = req.body;

  const newFeedback = new Feedback({
    name: name || "Anonymous",
    role: role !== undefined ? role : req.body.title || "",
    message: message !== undefined ? message : req.body.feedback || "",
    image: image || "https://i.pravatar.cc/150?img=12"
  });

  try {
    await newFeedback.save();
    res.json(newFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save feedback" });
  }
});


app.listen(5000, () => console.log("Server running on http://localhost:5000"));

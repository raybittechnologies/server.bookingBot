const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// POST endpoint that logs req.data
app.post("/data", (req, res) => {
  req.data = req.body;
  console.log("req.data:", req.data);
  res.json({ message: "Data received", received: req.data });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

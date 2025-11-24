const express = require("express");
const { Sequelize } = require("sequelize");


const app = express();
const PORT = 5073;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE CONNECTION

  const sequelize = new Sequelize(
 "bookingbot",
  "root",
  "x]0TQ!4d7mS7zJ",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

// Test DB connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✓ Database connected successfully!");
  } catch (error) {
    console.error("✗ Database connection failed:", error);
  }
})();


// ROUTES / API

app.post("/data", (req, res) => {
  const receivedData = req.body.call;
  console.log("req.data:", receivedData);

  res.json({
    message: "Data received",
    received: receivedData,
  });
});


// START SERVER

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

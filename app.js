const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hi all, good morning ☀️");
});

// Another route example
app.get("/greet", (req, res) => {
  res.json({
    message: "Hi all, good morning",
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
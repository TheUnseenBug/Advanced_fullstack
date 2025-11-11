const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js app! 🚀");
});

app.get("/test", (req, res) => {
  res.send("Working as intended");
});

app.get("/test-api", (req, res) => {
  res.status(500).send("internal server error");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

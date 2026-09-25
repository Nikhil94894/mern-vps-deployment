const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MERN VPS project is running",
  });
});

app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    message: "Products is ready for selling",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

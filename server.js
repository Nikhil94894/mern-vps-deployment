const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MERN ",
  });
});

app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    message: "Products is ready for selling",
  });
});

app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    users: [
      {
        id: 1,
        name: "Rohan kumar",
        city: "Pune",
      },
      {
        id: 2,
        name: "Rahul",
        city: "Mumbai",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

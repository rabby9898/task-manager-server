const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Task Manager Server..");
});

app.listen(port, () => {
  console.log(`Task Manager is running on port ${port}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Urban Feast Server Running...");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

const express = require("express");
const formData = require("express-form-data");

require("dotenv").config();

const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(formData.parse());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/v1", routes);

app.listen(PORT);

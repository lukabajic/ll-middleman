const express = require("express");
const formData = require("express-form-data");

require("dotenv").config();

const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(formData.parse());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use("/api/v1", routes);

app.listen(PORT);

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
const apiKey = process.env.API_KEY;

const baseUrl = "https://api.weatherapi.com/v1/forecast.json";

app.get("/", function (req, res) {
  res.send("WEATHER API");
});

app.get("/forecast/:city", cors(), function (req, res) {
  const city = req.params.city;
  const days = 3;
  const reqForecast = `${baseUrl}?q=${city}&days=${days}&key=${apiKey}&lang=fr`;

  fetch(reqForecast)
    .then(function (res) {
      console.log(reqForecast);
      return res.json();
    })
    .then(function (data) {
      res.json(data);
    })
    .catch(console.error);
});

const port = 3000;
app.listen(port, function () {
  console.log("Listen on port ".concat(port));
});

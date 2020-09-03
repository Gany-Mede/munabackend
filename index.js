require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
app.use(cors());
let PORT = process.env.PORT || 4000;

app.get("/news", (req, res) => {
  Axios.get(
    `https://api.currentsapi.services/v1/search?keywords=NASDAQ&apiKey=${process.env.CURRENTS_API_KEY}`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/vant1/:stock", (req, res) => {
  Axios.get(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.stock}&apikey=${process.env.VANTAGE_API_KEY1}`
  ).then((results) => {
    res.send(results.data);
  });
});

app.get("/vant2/:stock", (req, res) => {
  Axios.get(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.params.stock}&apikey=${process.env.VANTAGE_API_KEY2}`
  ).then((results) => {
    res.send(results.data);
  });
});
app.get("/vant3/:stock", (req, res) => {
  Axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.params.stock}&apikey=${process.env.VANTAGE_API_KEY3}`
  ).then((results) => {
    res.send(results.data);
  });
});

app.listen(PORT, function () {
  console.log("listening");
});

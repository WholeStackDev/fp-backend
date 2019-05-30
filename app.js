const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const trackRoutes = require("./routes/tracks");

// db.select("id")
//   .from("Tracks")
//   .then(res => {
//     console.log(JSON.stringify(res));
//   });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/tracks", trackRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);

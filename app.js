require("dotenv").config();
const nodeCleanup = require("node-cleanup");
const sequelize = require("./db/sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const blob = require("./storage/blob");

const { Track } = require("./db/db");

const trackRoutes = require("./routes/tracks");
const speakerRoutes = require("./routes/speakers");

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

// app.post("/tracks", (req, res) => {
//   const track = {};
//   track.title = req.body.title;
//   Track.create(track).then(() => {
//     console.log("Done creating track");
//   });
//   res.status(201).json({
//     message: "Insert successful"
//   });
// });

// app.use((req, res) => {
//   res.status(404).send("<h1>Page not found</h1>");
// });

app.use("/tracks", trackRoutes);
app.use("/speakers", speakerRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 80;

const server = app.listen(port, () => {
  console.log("How about now?");
});

nodeCleanup(() => {
  sequelize.close();
  server.close();
});

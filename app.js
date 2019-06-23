require("dotenv").config();
const nodeCleanup = require("node-cleanup");
const sequelize = require("./db/sequelize");
const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const fs = require("fs");

const { Track } = require("./db/db");

const trackRoutes = require("./routes/tracks");
const speakerRoutes = require("./routes/speakers");
const testRoutes = require("./routes/test");

global.rootPath = path.resolve(__dirname);
global.tempPath = path.join(global.rootPath, "temp/");
if (!fs.existsSync(global.tempPath)) fs.mkdirSync(global.tempPath);

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
app.use("/test", testRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {});

nodeCleanup(() => {
  sequelize.close();
  server.close();
});

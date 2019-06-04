const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", (req, res) => {
  res.send("Hello world!");
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);

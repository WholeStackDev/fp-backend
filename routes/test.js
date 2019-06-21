const express = require("express");
const router = express.Router();

const { Client } = require("pg");

router.get("/test", async (req, res) => {
  const client = new Client({
    connectionString: process.env.HEROKU_POSTGRES_DATABASE_URL,
    ssl: true
  });

  client.connect();

  client.query(
    "SELECT table_schema,table_name FROM information_schema.tables;",
    (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    }
  );

  res.status(201).json({ test: "words" });
});

module.exports = router;

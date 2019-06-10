const knex = require("knex")({
  client: "mysql2",
  version: "8.0",
  connection: {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "rt4TcPo09Y",
    database: "fp"
  }
});

module.exports = knex;

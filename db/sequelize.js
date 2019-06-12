const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.AZURE_DB_NAME,
  process.env.AZURE_DB_USER,
  process.env.AZURE_DB_PASSWORD,
  {
    host: process.env.AZURE_DB_HOST,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true
      }
    }
  }
);

module.exports = sequelize;

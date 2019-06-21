const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.HEROKU_POSTGRES_DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  host: process.env.HEROKU_POSTGRES_HOST,
  logging: true,
  dialectOptions: {
    ssl: true
  }
});

// const sequelize = new Sequelize(
//   process.env.AZURE_DB_NAME,
//   process.env.AZURE_DB_USER,
//   process.env.AZURE_DB_PASSWORD,
//   {
//     host: process.env.AZURE_DB_HOST,
//     dialect: "mssql",
//     dialectOptions: {
//       options: {
//         encrypt: true
//       }
//     }
//   }
// );

module.exports = sequelize;

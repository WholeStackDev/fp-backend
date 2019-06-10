const Sequelize = require("sequelize");

const sequelize = new Sequelize("main", "phillipsma3", "HA6Rk6t4L3Fp_i_QgANX", {
  host: "phillips.database.windows.net",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});

module.exports = sequelize;

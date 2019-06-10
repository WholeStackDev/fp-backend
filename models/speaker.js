const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const Speaker = sequelize.define("speaker", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: "UNIQUEIDENTIFIER",
    defaultValue: Sequelize.UUIDV1
  },
  firstName: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

module.exports = Speaker;

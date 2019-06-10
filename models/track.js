const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const Track = sequelize.define("track", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: "UNIQUEIDENTIFIER",
    defaultValue: Sequelize.UUIDV1
  },
  title: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  event: {
    type: Sequelize.STRING(100),
    allowNull: true
  }
});

module.exports = Track;

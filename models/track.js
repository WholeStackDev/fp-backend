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
  speaker: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  event: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  eventYear: {
    type: Sequelize.SMALLINT,
    allowNull: true
  },
  eventMonth: {
    type: Sequelize.TINYINT,
    allowNull: true
  },
  eventDay: {
    type: Sequelize.TINYINT,
    allowNull: true
  }
});

module.exports = Track;
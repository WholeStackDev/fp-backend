const nodeCleanup = require("node-cleanup");
// const db = require("./sequelize/db");

// const Sequelize = require("sequelize");
const sequelize = require("./db/sequelize");
const { Track } = require("./db/db");

nodeCleanup(() => {
  console.log("Closing DB connection");
  sequelize.close();
});

// const Track = sequelize.define("track", {
//   id: {
//     allowNull: false,
//     primaryKey: true,
//     type: "UNIQUEIDENTIFIER",
//     defaultValue: Sequelize.UUIDV1
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// Track.sync({ force: true }).then(() => {
//   return Track.create({
//     title: "Is This Thing On?"
//   });
// });

Track.findAll().then(tracks => {
  console.log(JSON.stringify(tracks, null, 4));
});

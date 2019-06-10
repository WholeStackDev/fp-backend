const nodeCleanup = require("node-cleanup");

const sequelize = require("./sequelize");
const { Track, Speaker } = require("./db");

nodeCleanup(() => {
  sequelize.close();
});

Track.sync({ force: true });
Speaker.sync({ force: true });

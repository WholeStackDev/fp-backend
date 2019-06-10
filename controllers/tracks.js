const { Track } = require("../db/db");

// exports.getTracks = async (req, res, next) => {
//   if (req.query.id) {
//     const tracks = await db.select("id").from("tracks");
//     console.log(tracks);
//     res.status(200).json(tracks);
//   } else {
//     throw { name: "NotImplementedError", message: "TODO" };
//   }
// };

exports.postTrack = async (req, res) => {
  const track = {
    title: req.body.title,
    event: req.body.event
  };
  const results = await Track.create(track);
  res.status(201).json(results.dataValues);
};

// exports.updateTrack = (req, res, next) => {
//   throw { name: "NotImplementedError", message: "TODO" };
// };

// exports.deleteTrack = (req, res, next) => {
//   throw { name: "NotImplementedError", message: "TODO" };
// };

// module.exports = trackRouter;

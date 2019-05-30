const db = require("../db");

exports.getTracks = async (req, res, next) => {
  if (req.query.id) {
    const tracks = await db.select("id").from("tracks");
    console.log(tracks);
    res.status(200).json(tracks);
  } else {
    throw { name: "NotImplementedError", message: "TODO" };
  }
};

exports.postTrack = (req, res) => {
  const track = {};
  track.id = req.body.id;
  //TODO: Add DB insert
  res.status(201).json({
    message: "Insert successful"
  });
};

exports.updateTrack = (req, res, next) => {
  throw { name: "NotImplementedError", message: "TODO" };
};

exports.deleteTrack = (req, res, next) => {
  throw { name: "NotImplementedError", message: "TODO" };
};

const { Track } = require("../db/db");
const blob = require("../storage/blob");
const fs = require("fs");
const path = require("path");

exports.getTracks = async (req, res, next) => {
  const results = await Track.findAll({ raw: true });
  res.status(201).json(results);
};

exports.postTrack = async (req, res) => {
  const track = {
    title: req.body.title,
    speaker: req.body.speaker,
    event: req.body.event,
    eventYear: req.body["event-year"],
    eventMonth: req.body["event-month"],
    eventDay: req.body["event-day"]
  };
  const results = await Track.create(track);
  res.status(201).json(results.dataValues);
};

exports.uploadTrack = async (req, res) => {
  const newPath = path.join(global.tempPath, req.query.id + ".mp3");
  fs.writeFile(newPath, req.file.buffer, err => {
    try {
      blob.createBlockBlobFromLocalFile(
        "tracks",
        req.query.id,
        newPath,
        err => {
          if (err) throw err;
          fs.unlink(newPath, () => {
            console.log("Code: E8760 - " + err);
          });
        }
      );
    } catch (error) {
      fs.unlink(newPath, () => {
        console.log("Code: E8761 - " + err);
      });
    }
  });
  res.status(201).json({ test: "words" });
};

exports.downloadTrack = async (req, res) => {
  const id = req.query.id;
  const filePath = path.join(global.tempPath, id + ".mp3");
  blob.getBlobToLocalFile("tracks", id, filePath, err => {
    if (err) throw err;
    try {
      res.download(filePath, () => {
        fs.unlink(filePath, () => {
          console.log("Code: E8762 - " + err);
        });
      });
    } catch (error) {
      fs.unlink(filePath, () => {
        console.log("Code: E8763 - " + err);
      });
    }
  });
};

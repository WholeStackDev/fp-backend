const { logError } = require("../utilities/logs");
const { Track } = require("../db/db");
const blob = require("../storage/blob");
const { createReadStream } = require("../utilities/streamFromBuffer");

exports.getTracks = async (req, res) => {
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
  const readableStream = createReadStream(req.file.buffer);
  try {
    readableStream.pipe(
      blob.createWriteStreamToBlockBlob("tracks", req.query.id)
    );
  } catch (error) {
    logError(error, 57616, "Unable to create Azure Block Blob on track upload");
    res.status(503);
  }
  res.status(201);
};

exports.downloadTrack = async (req, res) => {
  res.setHeader("content-type", "audio/mpeg");
  blob
    .createReadStream("tracks", req.query.id, error => {
      logError(error, 93873, "Unable to stream file from Azure Blob Storage");
    })
    .pipe(res);
};

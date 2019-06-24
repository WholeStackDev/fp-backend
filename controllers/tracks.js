const { logError } = require("../utilities/logs");
const { isUuid } = require("../utilities/uuid");
const { Track } = require("../db/db");
const blob = require("../storage/blob");
const { createReadStream } = require("../utilities/streamFromBuffer");

exports.getTracks = async (req, res) => {
  try {
    const results = await Track.findAll({ raw: true });
    res
      .status(200)
      .json(results)
      .end();
  } catch (error) {
    logError(error, 99246, "Unable to fetch tracks from the database");
    res.status(503).end();
  }
};

exports.postTrack = async (req, res) => {
  try {
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
  } catch (error) {
    logError(error, 5710, "Unable to add new track to the database");
    res.status(503).end();
  }
};

exports.uploadTrack = async (req, res) => {
  const readableStream = createReadStream(req.file.buffer);
  try {
    readableStream.pipe(blob.createWriteStreamToBlockBlob("tracks", req.query.id));
  } catch (error) {
    logError(error, 57616, "Unable to create Azure Block Blob on track upload");
    res.status(503);
  }
  res.status(201);
};

exports.downloadTrack = async (req, res) => {
  if (!req.query.id) {
    res.statusMessage = "Request must include an 'id' query param";
    res.status(400).end();
    return;
  }
  if (!isUuid(req.query.id)) {
    res.statusMessage = "Request must include an id that is a valid UUID";
    res.status(400).end();
    return;
  }
  try {
    blob.doesBlobExist("tracks", req.query.id, (error, result) => {
      if (error) {
        logError(error, 82596, "Error when trying to determine if track exists for download");
        res.status(503).end();
        return;
      } else if (!result.exists) {
        res.statusMessage = "A track with the given id does not exist";
        res.status(404).end();
        return;
      } else {
        res.setHeader("content-type", "audio/mpeg");
        blob
          .createReadStream("tracks", req.query.id, error => {
            if (error) {
              logError(error, 93873, "Unable to stream file from Azure Blob Storage");
              res.status(503);
              return;
            }
          })
          .pipe(res);
      }
    });
  } catch (error) {
    logError(error, 80086, "Error when trying to download file from Azure Blob Storage");
    res.status(500);
  }
};

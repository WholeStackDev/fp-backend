const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const controller = require("../controllers/tracks");

router.all("*", cors());

// GET: /tracks
router.get("/", cors(), controller.getTracks);

// POST: /tracks/create
router.post("/create", cors(), controller.postTrack);

router.post("/upload", cors(), upload.single("upload"), controller.uploadTrack);

router.get("/download", cors(), controller.downloadTrack);

// POST: /tracks/update?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
// router.post("/update", controller.updateTrack);

// DELETE: /tracks/delete?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
// router.delete("/delete", controller.deleteTrack);

module.exports = router;

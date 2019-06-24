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

// POST: /tracks/upload
router.post("/upload", cors(), upload.single("upload"), controller.uploadTrack);

// GET: /tracks/download?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
router.get("/download", cors(), controller.downloadTrack);

// DELETE: /tracks/delete?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
// router.delete("/delete", controller.deleteTrack);

module.exports = router;

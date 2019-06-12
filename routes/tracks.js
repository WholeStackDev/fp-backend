const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const controller = require("../controllers/tracks");

// GET: /tracks
// router.get("/", controller.getTracks);

// POST: /tracks/create
router.post("/create", controller.postTrack);

router.post("/upload", upload.single("upload"), controller.uploadTrack);

// POST: /tracks/update?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
// router.post("/update", controller.updateTrack);

// DELETE: /tracks/delete?id=XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX
// router.delete("/delete", controller.deleteTrack);

module.exports = router;

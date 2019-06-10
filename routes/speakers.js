const express = require("express");
const router = express.Router();

const controller = require("../controllers/speakers");

// GET: /speakers
router.get("/", controller.getSpeakers);

module.exports = router;

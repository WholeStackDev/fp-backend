const { Speaker } = require("../db/db");

exports.getSpeakers = async (req, res, next) => {
  const results = await Speaker.findAll({
    attributes: ["firstName", "lastName"],
    raw: true
  });
  res.status(200).json(results);
};

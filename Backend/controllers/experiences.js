const Experience = require("../models/experiences");
const fs = require("fs");

exports.getAllExperiences = (req, res, next) => {
  Experience.find()
    .then((experiences) => {
      res.status(200).json(experiences);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

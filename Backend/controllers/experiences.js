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

exports.getRandomExperience = (req, res, next) => {
  Experience.findOne({
    companyName: req.query.companyName,
  })
    .then((experience) => {
      res.status(200).json(experience);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

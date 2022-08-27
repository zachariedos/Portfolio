const Experience = require("../models/experiences");
const fs = require("fs");

exports.getAllExperiences = (req, res, next) => {
  Experience.find()
    .sort([["indexing", "asc"]])
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
  console.log(req.params);
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

exports.modifyExperienceIndex = (req, res, next) => {
  Experience.findByIdAndUpdate(
    req.body._id,
    { indexing: req.body.newIndex },
    {},
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    }
  );
};

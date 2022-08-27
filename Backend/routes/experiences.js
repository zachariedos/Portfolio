const express = require("express");
const router = express.Router();

const experiencesCtrl = require("../controllers/experiences");

router.get("/", experiencesCtrl.getAllExperiences);
router.get("/randomexperience", experiencesCtrl.getRandomExperience);
router.put("/modifyExperienceIndex", experiencesCtrl.modifyExperienceIndex);

module.exports = router;

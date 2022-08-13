const express = require("express");
const router = express.Router();

const experiencesCtrl = require("../controllers/experiences");

router.get("/", experiencesCtrl.getAllExperiences);
router.get("/randomexperience", experiencesCtrl.getRandomExperience);

module.exports = router;

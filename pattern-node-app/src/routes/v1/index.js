const express = require("express");
const generatePattern = require("./generate-pattern/index.js");
const router = express.Router();

router.use("/generate-pattern", generatePattern);

module.exports = router;

const express = require("express");
const controllers = require('../../../controllers/index.js');
const patternCtrl = controllers.patternCtrl
const router = express.Router();

router.get("/", patternCtrl.generatePattern);

module.exports = router;

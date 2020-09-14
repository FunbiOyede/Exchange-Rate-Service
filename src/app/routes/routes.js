const router = require("express").Router();
const controllers = require('../controller/index');
const controller = require("../controller/index");
router.get("/current",controller.getCurrentRates);
router.get("/historical",controller.getHistoricalRates);

module.exports = router;
const router = require("express").Router();
const controllers = require('../controller/index');
router.get("/api",controllers.test)

module.exports = router;
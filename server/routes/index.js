const express = require("express");
const router = express.Router();
const ctrl = require("./search.ctrl");

router.get("/frontend", ctrl.get.frontend);
router.get("/kbo", ctrl.get.kbo);
router.get("/nba", ctrl.get.nba);
router.get("/lol", ctrl.get.lol);
router.get("/coin", ctrl.get.coin);

module.exports = router;

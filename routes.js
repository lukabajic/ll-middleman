const express = require("express");

const router = express.Router();

const controllers = require("./controllers");

router.get("/coin-market-cap", controllers.coinMarketCap);

module.exports = router;

const express = require("express");
const { checkAddUrlToHit } = require("../middlewares/addUrl.middleware");
const config = require("../config/config");
const { searchController } = require("../controller/search.controller");
const Router = express.Router();

Router.get("/title", checkAddUrlToHit(config.scrapurl), searchController);

module.exports = Router;

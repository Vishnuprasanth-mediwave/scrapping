const express = require("express");
// const { scrapeNews } = require("../controller/newsController");
const { scrapingController } = require("../controller/fetch.controller");
const { searchController } = require("../controller/search.controller");
const config = require("../config/config");
const { checkAddUrlToHit } = require("../middlewares/addUrl.middleware");

const Router = express.Router();

Router.post("/", scrapingController);
Router.get("/search", checkAddUrlToHit(config.searchurl), searchController);

module.exports = Router;

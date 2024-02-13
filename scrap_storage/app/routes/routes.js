const express = require("express");
// const { scrapeNews } = require("../controller/newsController");
const { scrapingController } = require("../controller/fetch.controller");
const { searchController } = require("../controller/search.controller");

const Router = express.Router();

Router.post("/", scrapingController);
Router.get("/title", searchController);

module.exports = Router;

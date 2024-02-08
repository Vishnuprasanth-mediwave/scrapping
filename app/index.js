const express = require("express");
const config = require("./config/config");
const { models, Sequelize } = require("./config/sequelize-config");

const { scrapingController } = require("./controller/fetchcontroller");

const app = express();

// Define a route handler for your Puppeteer logic
app.get("/", scrapingController);

// Start the server and listen on port 3000
app.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`);
});

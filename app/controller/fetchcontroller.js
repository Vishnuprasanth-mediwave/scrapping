const { handleScrap } = require("../scrap");

const scrapingController = async (req, res) => {
  try {
    const scrapList = await handleScrap();
    // Send the scraped data as a response
    res.json(scrapList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { scrapingController };

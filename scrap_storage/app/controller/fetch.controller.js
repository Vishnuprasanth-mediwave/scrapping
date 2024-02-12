const { handleScrap } = require("../helper/scrap");
const { sequelize, models, Sequelize } = require("../config/sequelize-config");

const scrapingController = async (req, res, next) => {
  try {
    const scrapList = await handleScrap();
    if (scrapList) {
      for (const newsItem of scrapList) {
        const existingNews = await models.scrap_details.findOne({
          where: { id: newsItem.id },
        });

        if (!existingNews) {
          await models.scrap_details.create({
            id: newsItem.id,
            title: newsItem.title,
            link: newsItem.link,
            date: newsItem.date,
          });
        }
      }
    } else {
      return next({
        status: 400,
        message: "content not found",
      });
    }
    res.json(scrapList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { scrapingController };

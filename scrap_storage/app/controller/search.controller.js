const { sequelize, models, Sequelize } = require("../config/sequelize-config");
const axios = require("axios");

const searchController = async (req, res) => {
  try {
    const { search } = req.query;

    const foundNews = await models.scrap_details.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: `%${search}%`,
        },
      },
    });

    return res.status(200).json({ results: foundNews });
  } catch (error) {
    console.error("Error searching for news titles:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while searching for news titles" });
  }
};

module.exports = { searchController };

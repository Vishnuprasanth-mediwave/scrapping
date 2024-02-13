const { sequelize, models, Sequelize } = require("../config/sequelize-config");
const axios = require("axios");

const searchController = async (req, res) => {
  try {
    const { search } = req.query;
    const foundNews = await models.recent_search.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: `%${search}%`,
        },
      },
    });
    if (foundNews.length !== 0) {
      return res.status(200).json({ results: foundNews });
    }
    const getResp = await axios.get(req.hitUrl);
    if (getResp.status === 200) {
      return res
        .status(200)
        .json({ data: getResp.data, status: getResp.status });
    }
  } catch (error) {
    console.error("Error searching for news titles:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while searching for news titles" });
  }
};

module.exports = { searchController };

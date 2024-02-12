const { sequelize, models, Sequelize } = require("../config/sequelize-config");
const axios = require("axios");

// const { models } = require("../config/sequelize-config");

const searchController = async (req, res) => {
  try {
    const { query } = req.query;
    const getResp = await axios.get(
      req.hitUrl,
      setHeaders(ctx, requestConfig, internal)
    );
    return { data: getResp.data, status: getResp.status };

    const foundNews = await models.scrap_details.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).json({ results: foundNews });
  } catch (error) {
    console.error("Error searching for news titles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for news titles" });
  }
};

module.exports = { searchController };

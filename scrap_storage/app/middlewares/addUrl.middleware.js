const checkAddUrlToHit = (baseUrlToAppend) => (req, res, next) => {
  req.hitUrl = baseUrlToAppend + req.url;
  next();
};

module.exports = { checkAddUrlToHit };

const Services = require('@services/programming_languages.service');
const Logging = require('@utils/Logging');

const getMultiple = async (req, res, next) => {
  try {
    return res.status(200).json(await Services.getMultiple(req.query.page));
  } catch (error) {
    Logging.error(error.message);
  }
};

module.exports = {
  getMultiple
};
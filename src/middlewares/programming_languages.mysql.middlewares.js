const Services = require('@services/programming_languages.service');
const Logging = require('@utils/Logging');

const getMultiple = async (req, res, next) => {
  try {
    return res.status(200).json(await Services.getMultiple(req.query.page));
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    return res.status(201).json(await Services.create(req.body));
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    return res.status(200).json(await Services.update(req.params.id, req.body));
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    return res.status(200).json(await Services.remove(req.params.id));
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

module.exports = {
  getMultiple,
  create,
  update,
  remove
};
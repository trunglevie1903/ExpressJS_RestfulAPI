const PL = require('@models/programming_languages.mongodb');
const mysqlConfig = require('@services/mysql_config');
const Logging = require('@utils/Logging');
const Helper = require('@utils/Helper');

const getPL = async (req, res, next) => {
  try {
    let page = req.query.page;
    const listPerPage = mysqlConfig.config.listPerPage;
    const offset = Helper.getOffset(page, listPerPage);
    const pls = await PL.find().limit(listPerPage).skip(offset);
    const data = Helper.emptyOrRows(pls);
    const meta = { page };
    return res.status(200).json({ data, meta });
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const getPLById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const pl = await PL.findById(id);
    return res.status(200).json(pl);
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const createPL = async (req, res, next) => {
  try {
    const {
      name, released_year, githut_rank, pypl_rank, tiobe_rank
    } = req.body;
    const pl = new PL({
      name: name,
      released_year: released_year,
      githut_rank: githut_rank,
      pypl_rank: pypl_rank,
      tiobe_rank: tiobe_rank
    });
    await pl.save();
    return res.status(200).json(pl);
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const updatePL = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      name, released_year, githut_rank, pypl_rank, tiobe_rank
    } = req.body;
    const pl = await PL.findByIdAndUpdate(id, {
      name: name,
      released_year: released_year,
      githut_rank: githut_rank,
      pypl_rank: pypl_rank,
      tiobe_rank: tiobe_rank
    });
    if (pl === undefined || pl === null) {
      return res.status(404).json({ message: 'Update failed'});
    }
    return res.status(200).json(pl);
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

const deletePL = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await PL.findByIdAndDelete(id);
    if (data === undefined || data === null) {
      return res.status(404).json({ message: 'Delete failed'});
    }
    return res.status(200).json(data);
  } catch (error) {
    Logging.error(error.message);
    next(error);
  }
};

module.exports = {
  getPL, getPLById, createPL, updatePL, deletePL
};
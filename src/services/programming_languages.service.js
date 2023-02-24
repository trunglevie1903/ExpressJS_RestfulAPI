const mysqlServices = require('@services/mysql_services');
const mysqlConfig = require('@services/mysql_config');
const Helper = require('@utils/Helper');
const Logging = require('@utils/Logging');

const getMultiple = async (page = 1) => {
  let listPerPage = mysqlConfig.config.listPerPage;
  const offset = Helper.getOffset(page, listPerPage);
  const result = await mysqlServices.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${listPerPage}`
  );
  const data = Helper.emptyOrRows(result);
  const meta = { page };
  return {
    data, meta
  };
};

const create = async (pl) => {
  // Logging.info(`PL: ${pl.name}, ${pl.released_year}, ${pl.githut_rank}, ${pl.pypl_rank}, ${pl.tiobe_rank}`);
  const result = await mysqlServices.query(
    `INSERT INTO programming_languages
    (name, released_year, githut_rank, pypl_rank, tiobe_rank)
    VALUES
    ("${pl.name}", "${pl.released_year}", "${pl.githut_rank}", "${pl.pypl_rank}", "${pl.tiobe_rank}");`
  );
  let message = ((result.affectedRows) ? 'Programming language created successfully' : 'Error in creating programming language');
  // let message = '...';
  return { message };
};

const update = async (id, programming_language) => {
  const { name, released_year, githut_rank, pypl_rank, tiobe_rank } = programming_language;
  const result = await mysqlServices.query(
    `
      UPDATE programming_languages
      SET name="${name}", released_year="${released_year}", githut_rank="${githut_rank}", pypl_rank="${pypl_rank}", tiobe_rank="${tiobe_rank}"
      WHERE id=${id};
    `
  );
  let message = ((result.affectedRows) ? 'Programming language updated successfully' : 'Error in updating programming language');
  return { message };
};

const remove = async (id) => {
  const result = await mysqlServices.query(`
    DELETE FROM programming_languages WHERE id=${id};
  `);
  let message = ((result.affectedRows) ? 'Programming language deleted successfully' : 'Error in deleting programming language');
  return { message };
};

module.exports = {
  getMultiple,
  create,
  update,
  remove
};
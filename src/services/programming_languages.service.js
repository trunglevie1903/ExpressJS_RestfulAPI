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

module.exports = {
  getMultiple
};
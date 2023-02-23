const mysql = require('mysql2/promise');

const mysqlConfig = require('@services/mysql_config');
const Logging = require('@utils/Logging');

const query = async (sql, params) => {
  try {
    // const connection = await mysql.createPool(mysqlConfig.config.db);
    // const [result, ] = await connection.execute(sql, params);
    const pool = await mysql.createPool({
      ...mysqlConfig.config.db,
      waitForConnections: true,
      connectionLimit: 10,
      idleTimeout: 60000,
      queueLimit: 0
    });
    const [result, ] = await pool.execute(sql, params);
    return result;
  } catch (error) {
    Logging.error(error.message);
  }
};

module.exports = {
  query
};
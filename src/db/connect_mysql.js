const mysql = require('mysql2/promise');

const Logging = require('@utils/Logging');

const connect_mysql = async (host, user, password, dbname) => {
  try {
    const connection = await mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: dbname
    });
    
    const [rows, fields] = await connection.execute('SELECT * from `programming_languages`');
    if (rows || fields) {
      Logging.info('MySQL connected!');
    } else {
      Logging.error('Something went wrong when trying to connect to MySQL');
    }
  } catch (error) {
    Logging.error(error.message);
  }
};

module.exports = {
  connect_mysql
};
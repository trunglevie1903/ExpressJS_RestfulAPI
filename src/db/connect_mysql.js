const mysql = require('mysql2/promise');

const Logging = require('@utils/Logging');


const connect_mysql = async (db_config) => {
  try {
    // console.log(db_config);
    const connection = await mysql.createConnection(db_config);
    // const connection = await mysql.createPool({
    //   ...db_config,
    //   port: 3306,
    // });
    
    const [rows, fields] = await connection.execute('SELECT * from `programming_languages`');
    if (rows || fields) {
      Logging.info('MySQL connected!');
    } else {
      Logging.error('Something went wrong when trying to connect to MySQL');
    }
    connection.end();
  } catch (error) {
    Logging.error(error.message);
  }
};

module.exports = {
  connect_mysql
};
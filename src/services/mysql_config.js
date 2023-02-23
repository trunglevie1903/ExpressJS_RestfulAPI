require('dotenv').config('@root/../.env');
const { 
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DBNAME
} = process.env;

const config = {
  db: {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DBNAME,
  },
  listPerPage: 10,
};

module.exports = {
  config
};
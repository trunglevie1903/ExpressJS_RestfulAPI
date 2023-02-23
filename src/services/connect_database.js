const Logging = require('@utils/Logging');
const connectMongoDB = require('@db/connect_mongodb');
const connectMySQL = require('@db/connect_mysql');

const connectDatabase_mongodb = (path, user, password) => {
  Logging.log('Trying to connect to MongoDB...');
  
  const uri = `mongodb+srv://${user}:${password}${path}`;
  return connectMongoDB.connect_mongodb(uri);
};

const connectDatabase_mysql = (db_config) => {
  Logging.log('Trying to connect to MySQL...');
  return connectMySQL.connect_mysql(db_config);
};

module.exports = {
  connectDatabase_mongodb,
  connectDatabase_mysql
};
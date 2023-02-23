const Logging = require('@utils/Logging');
const connectMongoDB = require('@db/connect_mongodb');

const connectDatabase_mongodb = (path, user, password) => {
  Logging.log('Trying to connect to MongoDB ...');
  
  const uri = `mongodb+srv://${user}:${password}${path}`;
  return connectMongoDB.connect_mongodb(uri);
};

module.exports = {
  connectDatabase_mongodb
};
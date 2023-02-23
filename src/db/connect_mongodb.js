const mongoose = require('mongoose');
const Logging = require('@utils/Logging');

const connect_mongodb = async (uri) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri);
    switch (mongoose.connection.readyState) {
      case 0: /** Disconnected */
        Logging.error(`MongoDB disconnected!`);
        break;
      case 1: /** Connected */
        Logging.info('MongoDB connected!');
        break;
      default:
        Logging.warning(`Functioning connection to MongoDB ...`);
    }
    return;
  } catch (error) {
    Logging.error(error.message);
  }
};

module.exports = {
  connect_mongodb
};
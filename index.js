const http = require('http');

const express = require('express');
require('dotenv').config();
require('module-alias/register');

const Logging = require('@utils/Logging');
const defaultServices = require('@services/default_services');
const defaultMiddlewares = require('@middlewares/default_middlewares');
const connectDatabase = require('@services/connect_database');
const mysqlConfig = require('@services/mysql_config');

const PL_Router = require('@routes/programming_languages');

const {
  MONGO_PATH, MONGO_USER, MONGO_PASSWORD,
  PORT
} = process.env;
const port = PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Log request info */
app.use(defaultMiddlewares.logRequestInfo);

/** Routes */
app.use('/programming-languages', PL_Router);
app.use('/ping', defaultMiddlewares.healthCheck);
app.use('/', defaultServices.getHomePage);

/** Default error handler */
app.use(defaultMiddlewares.default404ErrorHandler);

const httpServer = http.createServer(app);
const start = async () => {
  try {
    await connectDatabase.connectDatabase_mongodb(MONGO_PATH, MONGO_USER, MONGO_PASSWORD);
    await connectDatabase.connectDatabase_mysql(mysqlConfig.config.db);
    httpServer.listen(port, () => {
      Logging.log(`Server started on port ${port}`);
    });
  } catch (error) {
    Logging.error(error.message);
  }
};
start();
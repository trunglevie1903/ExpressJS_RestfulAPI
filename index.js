const http = require('http');

const express = require('express');
require('dotenv').config();
require('module-alias/register');

const Logging = require('@utils/Logging');
const defaultServices = require('@services/default_services');
const defaultMiddlewares = require('@middlewares/default_middlewares');

const { PORT } = process.env;
const port = PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Log request info */
app.use(defaultMiddlewares.logRequestInfo);

/** Routes */
app.use('/ping', defaultMiddlewares.healthCheck);
app.use('/', defaultServices.getHomePage);

/** Default error handler */
app.use(defaultMiddlewares.defaultErrorHandler);

const httpServer = http.createServer(app);
const start = async () => {
  try {
    httpServer.listen(port, () => {
      Logging.log(`Server started on port ${port}`);
    });
  } catch (error) {
    Logging.error(error.message);
  }
};
start();
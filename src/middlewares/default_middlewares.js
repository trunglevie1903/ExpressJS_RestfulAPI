const Logging = require('@utils/Logging');

const logRequestInfo = (req, res, next) => {
  Logging.info(`METHOD: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress}`);
  res.on('finish', () => {
    Logging.info(`METHOD: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress} - STATUS: ${res.statusCode}`)
  });
  next();
};

const default404ErrorHandler = (req, res, next) => {
  const error = new Error("Not Found!");
  // Logging.error(error.message);
  return res.status(404).json({ message: error.message });
};

const healthCheck = (req, res, next) => {
  try {
    return res.status(200).json({ message: "Ping pong! Health check, health check!"});
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

module.exports = {
  logRequestInfo,
  default404ErrorHandler,
  healthCheck
};
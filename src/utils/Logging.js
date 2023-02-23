const chalk = require('chalk');

const getCurrentTime = () => new Date().toLocaleString();

const info = (args) => console.log(chalk.green(`[${getCurrentTime()}] [INFO] `), typeof args === 'string' ? chalk.greenBright(args) : args);

const warning = (args) => console.log(chalk.yellow(`[${getCurrentTime()}] [WARNING] `), typeof args === 'string' ? chalk.yellowBright(args) : args);

const error = (args) => console.log(chalk.red(`[${getCurrentTime()}] [ERROR] `), typeof args === 'string' ? chalk.redBright(args) : args);

const log = (args) => info(args);

module.exports = {
  info, warning, error, log
};

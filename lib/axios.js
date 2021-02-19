const axios = require("axios").default;
const chalk = require("chalk");
const ora = require("ora");
const isOnline = require("is-online");

// console log
const { errorLog } = require("./log");

/**
 *
 * @param {*} url
 * @param {*} token
 */

async function get(url, token) {
  const online = await isOnline();
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  if (online) {
    // Spinner type: 'aesthetic', 'point', 'arrow3, 'bouncingBall'
    const spinner = ora({ color: "yellow", spinner: "arrow3" }).start(
      `${chalk.yellow.italic("Please wait...")}`
    );

    try {
      let response = await axios.get(url, options);

      spinner.stop();

      return response;
    } catch (error) {
      spinner.stop();

      errorLog(error.message);
    }
  } else {
    const noInternetLog = chalk(
      `
  ${chalk.red.bold("No internet connection")}
  Sorry, you can't use this feature offline. 
  Please check your connection and try again.
      `
    );

    console.log(noInternetLog);
    process.exit(1);
  }
}

module.exports = { get };

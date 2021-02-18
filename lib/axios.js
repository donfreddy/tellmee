const axios = require("axios").default;
const chalk = require("chalk");
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
    try {
      let response = await axios.get(url, options);

      return response;
    } catch (error) {
      // handle error
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

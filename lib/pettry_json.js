const prettyjson = require("prettyjson");

/**
 * @param {any} data Json data to log
 */

function prettyJsonLog(data) {
  const options = {
    noColor: true,
  };

  console.log(prettyjson.render(data, options, 2));
}

module.exports = { prettyJsonLog };

var prettyjson = require("prettyjson");

var data = {
  username: "Don Freddy",
  url: "https://github.com/Donfreddy",
  twitter_account: "https://twitter.com/Donfreddy2",
  projects: ["tellmee", "easyDo"],
};

// var options = {
//   keysColor: "rainbow",
//   dashColor: "magenta",
//   stringColor: "white",
// };

// console.log(`\n${prettyjson.render(data, options)}`);

/**
 * @param {*} data
 */

function prettyJsonLog(data) {
  console.log(`\n${prettyjson.render(data)}`);
}

module.exports = { prettyJsonLog };

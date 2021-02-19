var prettyjson = require("prettyjson");
const olog = require("ololog");

var data = {
  username: "Don Freddy",
  url: "https://github.com/Donfreddy",
  twitter_account: "https://twitter.com/Donfreddy2",
  projects: ["tellmee", "easyDo"],
};

var options = {
  keysColor: "rainbow",
  dashColor: "magenta",
  stringColor: "yellow",
};

// console.log(`\n${prettyjson.render(data, options)}`);

/**
 * @param {*} data
 */

function prettyJsonLog(data) {
  olog(" ", prettyjson.render(data, options));
}

module.exports = { prettyJsonLog };

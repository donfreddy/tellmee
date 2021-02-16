var chalk = require("chalk");
var data = require("./lib/data");

module.exports = function (options) {
  console.log(options.lang);

  if (options.command === "joke") {
    if (options.lang === "fr") {
      if (options.cat === "global") {
        data.getFrenchJoke();
      } else {
        data.getFrenchJokeByType(options.cat);
      }
    } else {
      if (options.cat === "global") {
        data.getJoke();
      } else {
      }
    }
  } else if (options.command === "quote") {
    if (options.lang === "fr") {
    } else {
      data.getQuote();
    }
  } else if (options.command === "inspire") {
    if (options.lang === "fr") {
    } else {
      data.getInspire();
    }
  } else {
    console.error("%s Invalid command name", chalk.red.bold("ERROR"));
  }
};

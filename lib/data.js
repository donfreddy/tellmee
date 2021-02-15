const axios = require("axios");
const chalk = require("chalk");

function getJoke() {
  axios({
    method: "get",
    url: "https://official-joke-api.appspot.com/random_joke",
  })
    .then((res) => {
      const setup = chalk.cyan(res.data.setup);
      const punchline = chalk.green(res.data.punchline);
      console.log(`${setup} - ${punchline}`);
    })
    .catch((err) => {
      const log = chalk.red(err);
      console.log(log);
    });
}

function getQuote() {
  axios({
    method: "get",
    url: "http://quotes.stormconsultancy.co.uk/random.json",
  })
    .then((res) => {
      const randomQuote = chalk.cyan(res.data.quote);
      const randomAuthor = chalk.green(res.data.author);
      const log = `${randomQuote} - ${randomAuthor}`;
      console.log(log);
    })
    .catch((err) => {
      const errorLog = chalk.red(err);
      console.log(errorLog);
    });
}

module.exports = { getJoke, getQuote };

const axios = require("axios");
const chalk = require("chalk");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDY0Mjg0MzczNDI5MjU2MTkzIiwibGltaXQiOjEwMCwia2V5IjoiZFdqU3I5YnF4c0swQmk3ZnEzQnpPWjRPT1Z0WTZsTXZ0bTVDNW1CcWZsRHZCeGdtWkgiLCJjcmVhdGVkX2F0IjoiMjAyMS0wMi0xNVQxNjowMTowMiswMDowMCIsImlhdCI6MTYxMzQwNDg2Mn0.bl--hUzt446V2UQkQfAtyZ_VNTh034HNjrZZJ0RDnGE";

/**
 ===================================
 Get jokes methods
 ===================================
 */

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

function getFrenchJoke() {
  axios({
    method: "get",
    url: "https://www.blagues-api.fr/api/random",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      const joke = chalk.cyan(res.data.joke);
      const answer = chalk.green(res.data.answer);
      console.log(`${joke} - ${answer}`);
    })
    .catch((err) => {
      const log = chalk.red(err);
      console.log(log);
    });
}

// type: global, dev, dark, limit, beauf, blondes
function getFrenchJokeByType(type) {
  axios({
    method: "get",
    url: `https://www.blagues-api.fr/api/type/${type}/random`,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      const joke = chalk.cyan(res.data.joke);
      const answer = chalk.green(res.data.answer);
      console.log(`${joke} - ${answer}`);
    })
    .catch((err) => {
      const log = chalk.red(err);
      console.log(log);
    });
}

/**
 ===================================
 Get quotes methods
 ===================================
 */

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

function getTdayQuote() {
  axios({
    method: "get",
    url: "https://zenquotes.io/api/today",
  })
    .then((res) => {
      const randomQuote = chalk.cyan(res.data[0].q);
      const randomAuthor = chalk.green(res.data[0].a);
      const log = `${randomQuote} - ${randomAuthor}`;
      console.log(log);
    })
    .catch((err) => {
      const errorLog = chalk.red(err);
      console.log(errorLog);
    });
}

function getFrenchQuote() {
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

/**
 ===================================
 Get inspire methods
 ===================================
 */

function getInspire() {
  axios({
    method: "get",
    url: "https://type.fit/api/quotes",
  })
    .then((res) => {
      const inspires = [...res.data];
      const random = Math.floor(Math.random() * inspires.length);
      const randomQuote = chalk.cyan(inspires[random].text);
      const randomAuthor = chalk.green(inspires[random].author || "Unknown");
      const log = `${randomQuote} - ${randomAuthor}`;
      console.log(log);
    })

    .catch((err) => {
      const errorLog = chalk.red(err);
      console.log(errorLog);
    });
}

module.exports = {
  getJoke,
  getTdayQuote,
  getFrenchJoke,
  getFrenchJokeByType,
  getQuote,
  getFrenchQuote,
  getInspire,
};

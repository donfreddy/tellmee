const axios = require("axios");
const chalk = require("chalk");
const { get } = require("./axios");

// console log
const { jokeLog, errorLog, quoteLog } = require("./log");

// .env
require("dotenv").config();

/**
 ===================================
 * Get jokes methods
 ===================================
 */

async function getJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  try {
    const res = await get(url);

    jokeLog(res.data.setup, res.data.punchline);
  } catch (err) {
    errorLog(err.message);
  }
}

async function getFrenchJoke() {
  const url = "https://www.blagues-api.fr/api/random";

  try {
    const res = await get(url, process.env.TOKEN);

    jokeLog(res.data.joke, res.data.answer);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 *
 * @param {*} type type: global, dev, dark, limit, beauf, blondes
 */
async function getFrenchJokeByType(type) {
  const url = `https://www.blagues-api.fr/api/type/${type}/random`;

  try {
    const res = await get(url, process.env.TOKEN);

    jokeLog(res.data.joke, res.data.answer);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 ===================================
 * Get quotes methods
 ===================================
 */

async function getQuote() {
  const url = "http://quotes.stormconsultancy.co.uk/random.json";

  try {
    const res = await get(url);

    quoteLog(res.data.quote, res.data.author);
  } catch (err) {
    errorLog(err.message);
  }
}

// function getFrenchQuote() {
//   const url = "";

//   try {
//     //const res = await get(url);

//     quoteLog("", "");
//   } catch (err) {
//     errorLog(err.message);
//   }
// }

/**
 ===================================
 * Get inspire quote methods
 ===================================
 */

async function getInspire() {
  const url = "https://type.fit/api/quotes";

  try {
    const res = await get(url);

    const inspires = [...res.data];
    const random = Math.floor(Math.random() * inspires.length);
    const quote = inspires[random].text;
    const author = inspires[random].author || "Unknown";

    quoteLog(quote, author);
  } catch (err) {
    errorLog(err.message);
  }
}

module.exports = {
  getJoke,
  getFrenchJoke,
  getFrenchJokeByType,
  getQuote,
  getInspire,
};



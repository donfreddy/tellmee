const axios = require("axios");
const chalk = require("chalk");
const { get } = require("./axios");
const { prettyJsonLog } = require("./pettry_json");

// console log
const {
  jokeLog,
  errorLog,
  quoteLog,
  numberLog,
  customNumberLog,
} = require("./log");

// .env
require("dotenv").config();

/**
 ===================================
 * Get jokes methods
 ===================================
 */

async function getJoke(hasColor) {
  const url = "https://official-joke-api.appspot.com/random_joke";

  try {
    const res = await get(url);

    jokeLog(res.data.setup, res.data.punchline, hasColor);
  } catch (err) {
    errorLog(err.message);
  }
}

async function getFrenchJoke(hasColor) {
  const url = "https://www.blagues-api.fr/api/random";

  try {
    const res = await get(url, process.env.TOKEN);

    jokeLog(res.data.joke, res.data.answer, hasColor);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 *
 * @param {*} type type: global, dev, dark, limit, beauf, blondes
 * @param {*} hasColor
 */
async function getFrenchJokeByType(type, hasColor) {
  const url = `https://www.blagues-api.fr/api/type/${type}/random`;

  try {
    const res = await get(url, process.env.TOKEN);

    jokeLog(res.data.joke, res.data.answer, hasColor);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 ===================================
 * Get quotes methods
 ===================================
 */

async function getQuote(hasColor) {
  const url = "http://quotes.stormconsultancy.co.uk/random.json";

  try {
    const res = await get(url);

    quoteLog(res.data.quote, res.data.author, hasColor);
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

async function getInspire(hasColor) {
  const url = "https://type.fit/api/quotes";

  try {
    const res = await get(url);

    const inspires = [...res.data];
    const random = Math.floor(Math.random() * inspires.length);
    const quote = inspires[random].text;
    const author = inspires[random].author || "Unknown";

    quoteLog(quote, author, hasColor);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 ===================================
 * Get number facts methods
 ===================================
 */

/**
 *
 * @param {*} type  type is one of trivia, math, date, or year. Defaults to trivia if omitted.
 */
async function getRandomNumber(type) {
  const url = `http://numbersapi.com/random/${type}?json`;

  try {
    const res = await get(url);

    numberLog(res.data);
  } catch (err) {
    errorLog(err.message);
  }
}

/**
 *
 * @param {*} num
 */
async function getCustomNumber(num) {
  const url = `http://numbersapi.com/${num}`;

  try {
    const res = await get(url);

    customNumberLog(res.data, num);
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
  getRandomNumber,
  getCustomNumber,
};

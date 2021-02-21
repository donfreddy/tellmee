const chalk = require("chalk");
const wrapAnsi = require("wrap-ansi");
const olog = require("ololog");
const { getmonthName, searchReplace } = require("./method");

// Number of columns to wrap the text to.
const COLUNM_NUMBER = 60;

/**
 * @param {String} joke
 * @param {String} answer
 * @param {Boolean} hasColor
 */
function jokeLog(joke, answer, hasColor) {
  const log = chalk.gray(
    `
  Q: ${chalk.cyan(joke)}
  A: ${chalk.green(answer)}
    `
  );
  const logWithoutColor = chalk(
    `
  Q: ${joke}
  A: ${answer}
    `
  );

  if (hasColor) {
    olog.noLocate(" ", wrapAnsi(log, COLUNM_NUMBER));
  } else {
    olog.noLocate(" ", wrapAnsi(logWithoutColor, COLUNM_NUMBER));
  }
  process.exit(1);
}

/**
 * @param {String} text
 * @param {String} author
 * @param {boolean} hasColor
 */
function quoteLog(text, author, hasColor) {
  const log = chalk.gray(`
 “${chalk.cyan(text)}”
  ― ${chalk.green.bold(author)}
  `);
  const logWithoutColor = chalk(`
  “${text}”
  ― ${chalk.bold(author)}
  `);

  if (hasColor) {
    olog.noLocate(" ", wrapAnsi(log, COLUNM_NUMBER));
  } else {
    olog.noLocate(" ", wrapAnsi(logWithoutColor, COLUNM_NUMBER));
  }
  process.exit(1);
}

/**
 * @param {any} data
 */
function numberLog(data) {
  const { text, number, type, year } = data;
  const customNumText = searchReplace(text, number);
  const customYearText = searchReplace(text, year);

  // Log math, year, trivia
  const log = chalk(`
  ${customNumText}
    `);

  // Log date
  const logDate = chalk(`
  ${customYearText}
    `);

  if (type !== "date") {
    olog.noLocate(" ", wrapAnsi(log, COLUNM_NUMBER));
  } else {
    olog.noLocate(" ", wrapAnsi(logDate, COLUNM_NUMBER));
  }

  process.exit(1);
}

/**
 * @param {String} text
 * @param {String} num Cant be "18" or "7/23"
 */
function customNumberLog(text, num) {
  const customNumText = searchReplace(text, num);
  const isDate = () => [1, 2].includes(num.search("/"));

  if (isDate()) {
    let month = "";
    let day = "";

    switch (num.search("/")) {
      case 1:
        month = getmonthName(num.substr(0, 1));
        day = num.substr(2);
        break;
      case 2:
        month = getmonthName(num.substr(0, 2));
        day = num.substr(3);
        break;
      default:
        break;
    }

    const findDay = searchReplace(text, day);
    const findMonth = searchReplace(findDay, month);

    const log = chalk(`
    ${findMonth}
      `);

    olog.noLocate(" ", wrapAnsi(log, COLUNM_NUMBER));
  } else {
    const log = chalk(`
    ${customNumText}
      `);

    olog.noLocate(" ", wrapAnsi(log, COLUNM_NUMBER));
  }

  process.exit(1);
}

/**
 * Display a warning similar to how errors are displayed by commander.
 *
 * @param {String} message
 */

function warning(message) {
  console.error();
  message.split("\n").forEach(function (line) {
    console.error("  warning: %s", line);
  });
  console.error();
}

/**
 * @param {String} msg
 */
function errorLog(msg) {
  console.error(
    `
  ${chalk.red.bold("Error:")} ${msg}
    `
  );

  process.exit(1);
}

module.exports = { jokeLog, quoteLog, numberLog, customNumberLog, errorLog };

const chalk = require("chalk");
const wrapAnsi = require("wrap-ansi");
const olog = require("ololog");
const { getmonthName, searchReplace } = require("./method");

// Number of columns to wrap the text to.
const COLUNM_NUMBER = 60;

/**
 * @param {*} joke
 * @param {*} answer
 * @param {*} hasColor
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
 * @param {*} text
 * @param {*} author
 * @param {*} hasColor
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
 * @param {*} data
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
 * @param {*} text
 * @param {*} num
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
 * @param {*} msg
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

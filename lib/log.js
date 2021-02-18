const chalk = require("chalk");

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
    console.log(log);
  } else {
    console.log(logWithoutColor);
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
    console.log(log);
  } else {
    console.log(logWithoutColor);
  }
  process.exit(1);
}

/**
 * @param {*} msg
 */
function errorLog(msg) {
  console.log(
    `
  ${chalk.red.bold("Error:")} ${msg}
    `
  );

  process.exit(1);
}

module.exports = { jokeLog, quoteLog, errorLog };

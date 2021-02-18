const chalk = require("chalk");

/**
 * @param {*} joke
 * @param {*} answer
 */
function jokeLog(joke, answer) {
  const log = chalk.gray(
    `
  Q: ${chalk.cyan(joke)}
  A: ${chalk.green(answer)}
    `
  );

  console.log(log);
  process.exit(1);
}

/**
 * @param {*} text
 * @param {*} author
 */
function quoteLog(text, author) {
  const log = chalk.gray(`
  “${chalk.cyan(text)}”
  ― ${chalk.green.bold(author)}
  `);

  console.log(log);
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

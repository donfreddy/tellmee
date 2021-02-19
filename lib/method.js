const chalk = require("chalk");

/**
 * Get month name from Date
 * @param {*} monthInDay
 */

function getmonthName(monthInDay) {
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthInDay];
}

/**
 * Search and Replace
 *
 * @param {*} str
 * @param {*} word
 */
function searchReplace(str, word) {
  const newWord = `${chalk.italic.cyan(word)}`;

  return str.replace(word, newWord);
}

module.exports = { getmonthName, searchReplace };

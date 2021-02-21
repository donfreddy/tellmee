const chalk = require("chalk");

/**
 * Get month name from Date
 * @param {Number} monthInInteger Get from user input
 */

function getmonthName(monthInInteger) {
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

  return monthNames[monthInInteger];
}

/**
 * Search and Replace
 *
 * @param {String} str Text to search word and replace
 * @param {String} word Word to search
 */
function searchReplace(str, word) {
  const newWord = `${chalk.italic.cyan(word)}`;

  return str.replace(word, newWord);
}

/**
 * Capitalize first letter of string
 *
 * @param {String} string
 */
function capitalizeFirst(string) {
  if (!string) return "";

  return string[0].toUpperCase() + string.slice(1);
}

/**
 * Capitalize first letter for each word
 *
 * @param {String} string
 */
function capitalizesFirstForAll(string) {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  // Directly return the joined string
  return words.join(" ");
}

module.exports = {
  getmonthName,
  searchReplace,
  capitalizeFirst,
  capitalizesFirstForAll,
};

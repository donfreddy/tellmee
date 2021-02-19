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
 * @param {*} newWord
 */
function searchReplace(str, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return str.replace(word, newWord);
}

module.exports = { getmonthName, searchReplace };

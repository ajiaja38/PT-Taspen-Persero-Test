/**
 *
 * @param {string[]} words
 * @returns
 */
const groupAndSortLetters = (words) => {
  let result = "";

  let combinedString = words.join("");

  let letterCounts = {};
  for (let char of combinedString) {
    if (letterCounts[char] === undefined) {
      letterCounts[char] = 0;
    }
    letterCounts[char]++;
  }

  let sortedLetters = Object.entries(letterCounts).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] < a[0] ? 1 : -1;
    } else {
      return b[1] - a[1];
    }
  });

  for (let [char] of sortedLetters) {
    result += char;
  }

  return result;
};

const words = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
const sortedLetters = groupAndSortLetters(words);
console.log(sortedLetters);

module.exports = groupAndSortLetters;

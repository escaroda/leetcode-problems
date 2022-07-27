/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return words.reduce((acc, cur) => acc += s.startsWith(cur), 0);
};

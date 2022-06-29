/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter(w => /^[qwertyuiop]*$/i.test(w) || /^[asdfghjkl]*$/i.test(w) || /^[zxcvbnm]*$/i.test(w));
};

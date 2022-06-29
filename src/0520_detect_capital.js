/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const isCapital = (char) => char >= 'A' && char <= 'Z';
  const isNotCapital = (char) => !isCapital(char);
  return [].every.call(word, isCapital) || [].every.call(word.slice(1), isNotCapital);
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const getCode = (char) => char.charCodeAt() - 97;
  const count = new Array(26).fill(0);

  for (const char of magazine) {
    count[getCode(char)] += 1;
  }

  for (const char of ransomNote) {
    if (!count[getCode(char)]--) return false;
  }

  return true;
};

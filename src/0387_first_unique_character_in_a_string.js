/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const getCode = (char) => char.charCodeAt() - 97;
  const count = new Array(26).fill(0);

  for (const char of s) {
    count[getCode(char)] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (count[getCode(char)] === 1) {
      return i;
    }
  }

  return -1;
};

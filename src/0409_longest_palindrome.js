/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const counts = new Uint16Array(58);
  for (const char of s) {
    counts[char.charCodeAt() - 65] += 1;
  }

  let max = 0;
  for (const count of counts) {
    max += count - count % 2;
  }

  return max === s.length ? max : max + 1;
};

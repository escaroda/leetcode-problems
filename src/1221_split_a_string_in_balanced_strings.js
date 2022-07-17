/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balance = 0, count = 0;
  for (const char of s) {
    balance += char === 'L' ? 1 : -1;
    if (!balance) count += 1;
  }
  return count;
};

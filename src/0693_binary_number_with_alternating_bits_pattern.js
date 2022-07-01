/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let i = 1;
  while (i < n) {
    i = i * 4 + 1;
  }
  return i === n || (i - 1) / 2 === n;
};

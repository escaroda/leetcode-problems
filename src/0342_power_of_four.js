/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n < 1) return false;

  while (n > 1) {
    n /= 4;
    if (!Number.isInteger(n)) return false;
  }

  return true;
};

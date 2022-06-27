/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = 0;
  for (const char of n) {
    if (char > max) {
      if (char == 9) return 9;
      max = char;
    }
  }
  return +max;
};

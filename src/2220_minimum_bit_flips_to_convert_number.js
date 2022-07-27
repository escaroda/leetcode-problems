/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let bits = start ^ goal,
    count = 0;

  while (bits) {
    count += bits & 1;
    bits >>>= 1;
  }

  return count;
};

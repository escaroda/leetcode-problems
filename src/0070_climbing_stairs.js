/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre = 0;
  let cur = 1;
  while (n--) {
    const saved = pre;
    pre = cur;
    cur += saved;
  }
  return cur;
};

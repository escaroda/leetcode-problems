/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0, b = 1, s;
  while (n--) {
    s = a + b;
    a = b;
    b = s;
  }
  return a;
};

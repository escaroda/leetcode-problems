/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let current = '';
    for (let i = 0; i < s.length; i += k) {
      current += s.slice(i, i + k).split('').reduce((a, b) => +a + +b);
    }
    s = current;
  }
  return s;
};

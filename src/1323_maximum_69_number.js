/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let i = 0, n = num, power;
  while (n) {
    const digit = n % 10;
    if (digit === 6) power = i;
    n = Math.trunc(n / 10);
    i++;
  }
  return power === undefined ? num : num + 3 * 10 ** power;
};

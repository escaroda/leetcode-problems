/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const odd = [],
    even = [],
    parity = [];

  while (num) {
    const digit = num % 10;
    num = Math.trunc(num / 10);
    const isOdd = digit % 2;
    isOdd ? odd.push(digit) : even.push(digit);
    parity.push(isOdd);
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => a - b);

  return parity.reduceRight((acc, cur, i) => acc += (cur ? odd.pop() : even.pop()) * 10 ** i, 0);
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const length = Math.max(num1.length, num2.length);
  const sum = [];
  let i = 0;
  let carry = 0;
  while (i < length || carry) {
    const n1 = Number(num1[num1.length - 1 - i]) || 0;
    const n2 = Number(num2[num2.length - 1 - i]) || 0;
    const s = n1 + n2 + carry;
    sum.push(s % 10);
    carry = Math.trunc(s / 10);
    i++;
  }
  return sum.reverse().join('');
};

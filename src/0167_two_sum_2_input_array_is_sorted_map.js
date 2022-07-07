/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const index = map.get(num);
    if (index) return [index, i + 1];
    map.set(target - num, i + 1);
  }
  return false;
};

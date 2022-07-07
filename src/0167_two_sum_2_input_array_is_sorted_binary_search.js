/**
 * @param {number[]} arr
 * @param {number} val
 * @return {number}
 */
const binarySearch = function (arr, val, start = 0, end = arr.length - 1) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  while (i < numbers.length - 1) {
    let num1 = numbers[i];
    const num2 = target - num1;
    const j = binarySearch(numbers, num2, i + 1);
    if (j > i) return [i + 1, j + 1];

    while (numbers[++i] === num1) { }
  }
};

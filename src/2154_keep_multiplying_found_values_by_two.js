/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  const unique = new Set(nums);
  while (unique.has(original)) {
    original *= 2;
  }
  return original;
};

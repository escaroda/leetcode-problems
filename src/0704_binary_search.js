/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    const num = nums[mid];
    if (target === num) return mid;

    if (target < num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

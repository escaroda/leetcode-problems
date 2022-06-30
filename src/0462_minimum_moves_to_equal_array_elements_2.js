/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);

  let result = 0, l = 0, r = nums.length - 1;
  do {
    result += nums[r] - nums[l];
  } while (++l < --r);

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);

  const median = nums[Math.trunc(nums.length / 2)];

  let result = 0;
  for (const num of nums) {
    result += Math.abs(median - num);
  }

  return result;
};

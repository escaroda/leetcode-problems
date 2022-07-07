/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];

  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const left = nums[l] ** 2;
    const right = nums[r] ** 2;
    result.push(left > right ? (l++, left) : (r--, right));
  }

  return result.reverse();
};

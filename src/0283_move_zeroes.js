/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    const num = nums[j++];
    if (num) {
      nums[i++] = num;
    }
  }
  while (i < nums.length) {
    nums[i++] = 0;
  }
};

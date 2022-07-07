/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let j = 0, i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!num) continue;
    const saved = nums[j];
    nums[j++] = nums[i];
    nums[i] = saved;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;
    if (num2 in map) return [i, map[num2]];
    map[num1] = i;
  }
  throw new Error('Not Found');
};

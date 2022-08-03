/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i],
      num2 = target - num1;

    if (num2 in map) return [i, map[num2]];
    map[num1] = i;
  }
};

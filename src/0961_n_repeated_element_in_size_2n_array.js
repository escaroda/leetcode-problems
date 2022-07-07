/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let k = 1; k < 4; k++) {
      if (num === nums[i + k]) return num;
    }
  }
};

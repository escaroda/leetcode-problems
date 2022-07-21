/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  const sum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (2 * leftSum === sum - num) return i;
    leftSum += num;
  }

  return -1;
};

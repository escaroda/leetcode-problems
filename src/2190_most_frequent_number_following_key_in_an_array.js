/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const counts = new Uint16Array(1001);

  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== key || ++counts[nums[i]] < counts[result]) continue;
    result = nums[i];
  }

  return result;
};

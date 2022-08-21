/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const unique = new Set(nums);

  let result = 0;
  for (const num of nums) {
    if (unique.has(num - 1)) continue;

    let length = 1;
    while (unique.has(num + length)) {
      length += 1;
    }

    result = Math.max(result, length);
  }

  return result;
};

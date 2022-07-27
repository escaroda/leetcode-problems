/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let pairs = 0;
  const s = new Uint8Array(101);
  for (const num of nums) {
    if (s[num]++) {
      pairs += 1;
      s[num] = 0;
    }
  }
  return [pairs, nums.length - pairs * 2];
};
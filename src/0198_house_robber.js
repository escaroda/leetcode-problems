/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prev = 0, curr = 0;
  for (const num of nums) {
    const save = prev;
    prev = curr;
    curr = Math.max(num + save, prev);
  }
  return curr;
};

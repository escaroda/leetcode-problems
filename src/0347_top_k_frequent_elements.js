/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counts = nums.reduce((acc, cur) => acc.set(cur, acc.get(cur) + 1 || 1), new Map());

  const map = [];
  for (const [num, count] of counts) {
    if (!map[count]) map[count] = [];
    map[count].push(num);
  }

  const result = [];
  for (let i = map.length - 1; k && i > -1; i--) {
    if (!map[i]) continue;
    for (let j = 0; k && j < map[i].length; j++, k--) {
      result.push(map[i][j]);
    }
  }

  return result;
};

/**
 * @param {number[]} stones
 * @param {number} val
 * @return {number}
 */
const binarySearch = (arr, val) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2),
      pick = arr[mid];

    if (pick === val) return mid;
    if (pick > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const y = stones.pop(),
      x = stones.pop(),
      z = y - x;

    if (z) stones.splice(binarySearch(stones, z), 0, z);
  }
  return stones[0] || 0;
};

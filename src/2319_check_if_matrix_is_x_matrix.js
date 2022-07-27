/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    const row = grid[i];
    for (let j = 0; j < n; j++) {
      if (j === i || j === n - 1 - i) {
        if (!row[j]) return false;
      } else if (row[j]) {
        return false;
      }
    }
  }

  return true;
};

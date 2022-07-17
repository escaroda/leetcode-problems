/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length, n = grid[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  const getIslandArea = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || !grid[i][j]) {
      return 0;
    }
    visited[i][j] = true;
    return 1 + getIslandArea(i + 1, j) + getIslandArea(i, j + 1)
      + getIslandArea(i - 1, j) + getIslandArea(i, j - 1);
  };

  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    const line = grid[i];
    for (let j = 0; j < line.length; j++) {
      maxArea = Math.max(maxArea, getIslandArea(i, j));
    }
  }

  return maxArea;
};

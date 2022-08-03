/**
 * @param {character[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
const dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') {
    return;
  }
  grid[i][j] = '.';
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const m = grid.length,
    n = grid[0].length;

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      dfs(grid, i, j);
      count += 1;
    }
  }

  return count;
};

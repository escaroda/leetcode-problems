/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  const q = new Queue();

  let fresh = 0;
  for (let i = 0; i < rows; i++) {
    const row = grid[i];
    for (let j = 0; j < cols; j++) {
      const cell = row[j];

      if (cell === 2) {
        q.enqueue([i, j]);
      } else if (cell === 1) {
        fresh += 1;
      }
    }
  }

  const dirs = [-1, 0, 1, 0, -1];

  let minutes = -1;
  while (!q.isEmpty()) {
    let rotten = q.size();
    while (rotten--) {
      const [row, col] = q.dequeue();

      for (let i = 0; i < 4; i++) {
        const r = row + dirs[i],
          c = col + dirs[i + 1];

        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) continue;

        grid[r][c] = 2;
        q.enqueue([r, c]);
        fresh -= 1;
      }
    }
    minutes += 1;
  }

  if (fresh) return -1;
  return minutes > -1 ? minutes : 0;
};

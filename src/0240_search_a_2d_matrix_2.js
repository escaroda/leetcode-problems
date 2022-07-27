/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0,
    col = matrix[0].length - 1;

  while (row < matrix.length && col > -1) {
    const current = matrix[row][col];
    if (target === current) return true;
    if (target > current) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};

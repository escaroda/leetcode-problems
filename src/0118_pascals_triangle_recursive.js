/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];

  const triangle = generate(numRows - 1);
  const row = triangle.at(-1);

  const nextRow = [1];
  for (let i = 1; i < row.length; i++) {
    nextRow.push(row[i - 1] + row[i]);
  }
  nextRow.push(1);

  triangle.push(nextRow);
  return triangle;
};

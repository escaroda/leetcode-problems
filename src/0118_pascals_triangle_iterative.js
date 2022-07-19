/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const rows = [[1]];
  for (let i = 1; i < numRows; i++) {
    const pre = rows.at(-1);
    const line = [1];
    for (let j = 1; j < pre.length; j++) {
      line.push(pre[j - 1] + pre[j]);
    }
    line.push(1);
    rows.push(line);
  }
  return rows;
};

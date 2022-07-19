/**
 * @param {number[][]} t
 * @return {number}
 */
var minimumTotal = function (t) {
  for (let i = t.length - 1; ~i; i--)
    for (let j = 0; j < t[i].length - 1; j++)
      t[i - 1][j] += Math.min(t[i][j], t[i][j + 1]);

  return t[0];
};

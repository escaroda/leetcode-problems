/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const MIN = 1950, MAX = 2050;
  const p = new Array(MAX - MIN).fill(0);

  for (const [birth, death] of logs) {
    p[birth - MIN]++;
    p[death - MIN]--;
  }

  let index = 0;
  for (let i = 1; i < p.length; i++) {
    p[i] += p[i - 1];
    index = p[i] > p[index] ? i : index;
  }

  return MIN + index;
};

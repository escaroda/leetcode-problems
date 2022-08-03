/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  return [...words.reduce((acc, cur) => acc.set(cur, acc.get(cur) + 1 || 1), new Map())]
    .sort((a, b) => a[1] !== b[1] ? b[1] - a[1] : a[0] > b[0] ? 1 : -1)
    .slice(0, k)
    .map(item => item[0]);
};
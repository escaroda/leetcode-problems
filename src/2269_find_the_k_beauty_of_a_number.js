/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const d = 10 ** k,
    l = 10 ** (k - 1) - 1;

  let count = 0,
    n = num;

  while (n > l) {
    const sub = n % d;
    n = Math.trunc(n / 10);
    if (!sub || num % sub) continue;
    count += 1;
  }

  return count;
};

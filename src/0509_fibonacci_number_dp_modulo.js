/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i % 2] = dp[0] + dp[1];
  }
  return dp[n % 2];
};

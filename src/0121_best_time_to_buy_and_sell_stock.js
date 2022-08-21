/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0,
    i = 0;

  for (let j = 1; j < prices.length; j++) {
    const profit = prices[j] - prices[i];

    if (profit > 0) {
      result = Math.max(result, profit);
    } else {
      i = j;
    }
  }

  return result;
};

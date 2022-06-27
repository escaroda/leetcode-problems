/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let max = 0;
  
  for (let i = 0; i < k; i++) {
    max += cardPoints[i];
  }
  
  let cur = max;
  for (let j = 0; j < k; j++) {
    cur -= cardPoints[k - 1 - j];
    cur += cardPoints[cardPoints.length - 1 - j];
    if (cur > max) max = cur;
  }

  return max;
};

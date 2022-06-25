/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  
  let reversed = 0;
  for (let i = x; i > 0; i = Math.trunc(i / 10)) {
    reversed = reversed * 10 + i % 10;
  }
  
  return reversed === x;
};

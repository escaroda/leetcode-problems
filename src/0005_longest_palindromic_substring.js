/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getPalindrome = (i, j) => {
    while (i > -1 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    return s.slice(i + 1, j);
  };

  let result = '';
  for (let i = 0; i < s.length; i++) {
    const p1 = getPalindrome(i, i),
      p2 = getPalindrome(i, i + 1);

    if (p1.length > result.length) result = p1;
    if (p2.length > result.length) result = p2;
  }

  return result;
};

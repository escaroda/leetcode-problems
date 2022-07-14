/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const previous = new Set();

  let i = 0, j = 0, max = 0;
  while (i < s.length) {
    if (previous.has(s[i])) {
      previous.delete(s[j++]);
    } else {
      previous.add(s[i++]);
      max = Math.max(max, previous.size);
    }
  }

  return max;
};

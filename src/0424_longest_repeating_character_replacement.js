/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = new Uint32Array(26);
  const getCode = (char) => char.charCodeAt() - 65;

  let l = 0,
    freq = 1,
    result = 1;

  for (let r = 0; r < s.length; r++) {
    count[getCode(s[r])] += 1;
    freq = Math.max(freq, count[getCode(s[r])]);

    while (r - l + 1 - freq > k) {
      count[getCode(s[l])] -= 1;
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
};

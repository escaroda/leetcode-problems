/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const getCode = (char) => char.charCodeAt() - 97;
  const count = new Uint16Array(26);

  for (const char of s) {
    count[getCode(char)] += 1;
  }

  for (const char of t) {
    if (!count[getCode(char)]--) return false;
  }

  if (count.some(Boolean)) return false;

  return true;
};

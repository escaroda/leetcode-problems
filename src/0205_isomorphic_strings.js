/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const mapped = map.get(s[i]);
    if (mapped && mapped !== t[i]) return false;
    map.set(s[i], t[i]);
  }

  const unique = new Set();
  for (const value of map.values()) {
    if (unique.has(value)) return false;
    unique.add(value);
  }

  return true;
};

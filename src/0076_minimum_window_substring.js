/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const getCode = (char) => char.charCodeAt() - 65;

  const countS = new Uint32Array(58),
    countT = [...t].reduce((acc, cur) => (acc[getCode(cur)]++, acc), new Uint32Array(58));

  let result = '',
    need = countT.reduce((acc, cur) => acc + !!cur, 0),
    have = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    const r = getCode(s[j]);
    countS[r] += 1;

    if (countT[r] && countT[r] === countS[r]) {
      have += 1;
    }

    while (need === have) {
      if (!result || result.length > j - i + 1) {
        result = s.slice(i, j + 1);
      }

      const l = getCode(s[i++]);
      countS[l] -= 1;

      if (countT[l] && countS[l] < countT[l]) {
        have -= 1;
      }
    }
  }

  return result;
};

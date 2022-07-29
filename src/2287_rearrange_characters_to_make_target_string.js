/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const count1 = new Uint8Array(26),
    count2 = new Uint8Array(26);
  for (const char of s) {
    count1[char.charCodeAt() - 97] += 1;
  }
  for (const char of target) {
    count2[char.charCodeAt() - 97] += 1;
  }

  const totals = [];
  for (let i = 0; i < count2.length; i++) {
    if (count2[i]) totals.push(Math.trunc(count1[i] / count2[i]));
  }

  return Math.min(...totals);
};

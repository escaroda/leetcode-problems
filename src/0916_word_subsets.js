/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const getCount = (word) => {
    const count = new Uint8Array(26);
    for (const char of word) {
      count[char.charCodeAt() - 97] += 1;
    }
    return count;
  };

  const count2 = words2.reduce((acc, cur) => {
    const count = getCount(cur);
    for (let i = 0; i < acc.length; i++) {
      acc[i] = Math.max(acc[i], count[i]);
    }
    return acc;
  }, new Uint8Array(26))

  const isSubset = (word1) => {
    const count1 = getCount(word1);
    for (let i = 0; i < 27; i++) {
      if (count1[i] - count2[i] < 0) return false;
    }
    return true;
  };

  return words1.filter(isSubset);
};

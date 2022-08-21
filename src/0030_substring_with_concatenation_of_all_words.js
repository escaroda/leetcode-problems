/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const result = [],
    wordLength = words[0].length,
    wordCount = words.length,
    size = wordCount * wordLength,
    map = {};

  const isConcat = (substr) => {
    const seen = {};

    for (let i = 0; i < substr.length; i += wordLength) {
      const word = substr.slice(i, i + wordLength);
      seen[word] = seen[word] + 1 || 1;
    }

    for (const key in map) {
      if (map[key] !== seen[key]) {
        return false;
      }
    }

    return true;
  };

  for (const word of words) {
    map[word] = map[word] + 1 || 1;
  }

  for (let i = 0; i < s.length - size + 1; i++) {
    if (isConcat(s.slice(i, i + size))) {
      result.push(i);
    }
  }

  return result;
};

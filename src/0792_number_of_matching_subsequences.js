/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const getCharCode = (char) => char.charCodeAt() - 97;

  let count = 0;
  const dict = Array.from({ length: 26 }, () => []);

  for (const word of words) {
    dict[getCharCode(word[0])].push(word);
  }

  for (const char of s) {
    const c = getCharCode(char);
    const waiting = dict[c];
    dict[c] = [];
    for (const word of waiting) {
      if (word.length === 1) {
        count += 1;
        continue;
      }
      dict[getCharCode(word[1])].push(word.slice(1));
    }
  }

  return count;
};

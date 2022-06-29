/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  const result = [];
  for (const word of words) {
    const chars = word.toLowerCase().split('');
    for (const row of rows) {
      if (chars.every(row.has, row)) {
        result.push(word);
        break;
      }
    }
  }

  return result;
};

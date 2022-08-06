/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    const prefix = strs[0].slice(0, i + 1);
    if (strs.some(str => !str.startsWith(prefix))) {
      break;
    }
    result = prefix;
  }
  return result;
};

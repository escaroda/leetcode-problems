/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const char of s) {
    const closing = pairs[char];
    if (closing) {
      stack.push(closing);
    } else if (char !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [],
    stack = [];

  const helper = (open, closed) => {
    if (!open && !closed) {
      result.push(stack.join(''));
      return;
    }

    if (open) {
      stack.push('(');
      helper(open - 1, closed);
      stack.pop();
    }

    if (closed > open) {
      stack.push(')');
      helper(open, closed - 1);
      stack.pop();
    }
  };

  helper(n, n);

  return result;
};

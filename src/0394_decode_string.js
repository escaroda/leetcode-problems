/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  let num = 0,
    str = '';

  for (const char of s) {
    if (char === '[') {
      stack.push([str, num]);
      num = 0;
      str = '';
    } else if (char === ']') {
      const prev = stack.pop();
      str = prev[0] + str.repeat(prev[1]);
    } else if (Number.isInteger(+char)) {
      num = num * 10 + +char;
    } else {
      str += char;
    }
  }

  return str;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const xor = (acc, cur) => acc ^= cur.charCodeAt();
  return String.fromCharCode([...t].reduce(xor, [...s].reduce(xor, 0)));
};

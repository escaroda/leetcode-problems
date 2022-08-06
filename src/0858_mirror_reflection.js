/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  while (p % 2 === 0 && q % 2 === 0) {
    p >>= 1; // p /= 2
    q >>= 1; // q /= 2
  }
  return p % 2 === 0 ? 2 : q % 2 === 0 ? 0 : 1;
};

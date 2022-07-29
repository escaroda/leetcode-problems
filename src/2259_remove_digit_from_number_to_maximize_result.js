/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  const erase = (str, i) => str.slice(0, i) + str.slice(i + 1);

  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] === digit && number[i + 1] > digit) return erase(number, i);
  }

  return erase(number, number.lastIndexOf(digit));
};

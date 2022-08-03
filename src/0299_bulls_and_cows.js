/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const count = new Int16Array(10);
  let bulls = 0,
    cows = 0;

  for (let i = 0; i < guess.length; i++) {
    const s = secret[i],
      g = guess[i];

    if (s === g) {
      bulls += 1;
      continue;
    }

    if (count[s]++ < 0) cows++;
    if (count[g]-- > 0) cows++;
  }

  return `${bulls}A${cows}B`;
};

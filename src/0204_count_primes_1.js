/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const primes = new Uint8Array(n).fill(1, 2);

  for (let i = 2; i * i < n; i++) {
    if (!primes[i]) continue;
    for (let j = i * i; j < n; j += i) {
      primes[j] = 0;
    }
  }

  return primes.reduce((a, b) => a + b, 0);
};

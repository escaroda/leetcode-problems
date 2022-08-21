/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const primes = new Uint8Array(n);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (primes[i]) continue;
    count += 1;

    for (let j = i * i; j < n; j += i) {
      primes[j] = 1;
    }
  }

  return count;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const length = arr.length + 1;
  let sum = 0;
  for (let i = 1; i < length; i += 2) {
    for (let j = 0; j < length - i; j++) {
      for (let k = 0; k < i; k++) {
        sum += arr[j + k];
      }
    }
  }
  return sum;
};

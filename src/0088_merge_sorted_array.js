/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m + n - 1;
  while (n) {
    nums1[i] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
    i--;
  }
};

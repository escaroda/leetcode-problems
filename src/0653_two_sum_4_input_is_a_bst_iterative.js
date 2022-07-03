/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const s = new Set();
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;

    if (s.has(node.val)) return true;
    s.add(k - node.val);

    stack.push(node.right, node.left);
  }

  return false;
};

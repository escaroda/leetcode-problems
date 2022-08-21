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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;

    const left = 1 + dfs(node.left),
      right = 1 + dfs(node.right),
      balanced = Math.abs(left - right) < 2;

    return balanced ? Math.max(left, right) : Infinity;
  }

  return dfs(root) !== Infinity;
};

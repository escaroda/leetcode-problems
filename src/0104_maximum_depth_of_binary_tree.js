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
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0;

  const stack = [[1, root]];
  while (stack.length) {
    const [depth, node] = stack.pop();
    if (!node) continue;

    result = Math.max(depth, result);
    stack.push([depth + 1, node.right], [depth + 1, node.left]);
  }

  return result;
};
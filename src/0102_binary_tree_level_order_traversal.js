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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const stack = [[0, root]];

  while (stack.length) {
    const [depth, node] = stack.pop();
    if (!node) continue;

    if (!result[depth]) result[depth] = [];
    result[depth].push(node.val);

    stack.push([depth + 1, node.right], [depth + 1, node.left]);
  }

  return result;
};

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;

    result.push(node.val);
    stack.push(node.right, node.left);
  }

  return result;
};

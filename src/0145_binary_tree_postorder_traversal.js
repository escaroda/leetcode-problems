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
var postorderTraversal = function (root) {
  const result = [];
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    const node = stack1.pop();
    if (!node) continue;
    stack2.push(node);
    stack1.push(node.left, node.right);
  }

  while (stack2.length) {
    const node = stack2.pop();
    result.push(node.val);
  }

  return result;
};

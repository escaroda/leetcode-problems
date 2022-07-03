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
  const stack = [{ depth: 0, node: root }];

  while (stack.length) {
    let { depth, node } = stack.pop();
    if (!node) continue;
    if (!result[depth]) result[depth] = [];
    result[depth].push(node.val);
    depth += 1;
    stack.push({ depth, node: node.right }, { depth, node: node.left });
  }

  return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;

  const stack = [[root1, root2]];
  while (stack.length) {
    const [node1, node2] = stack.pop();
    if (!node2) continue;

    node1.val += node2.val;

    if (!node1.left) {
      node1.left = node2.left;
    } else {
      stack.push([node1.left, node2.left]);
    }

    if (!node1.right) {
      node1.right = node2.right;
    } else {
      stack.push([node1.right, node2.right]);
    }
  }

  return root1;
};

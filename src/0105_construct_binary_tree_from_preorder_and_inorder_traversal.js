/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder, p1 = 0, p2 = preorder.length - 1, i1 = 0, i2 = inorder.length - 1) => {
  if (p1 > p2 || i1 > i2) return null;

  const value = preorder[p1],
    index = inorder.indexOf(value, i1),
    nLeft = index - i1;

  return new TreeNode(
    value,
    buildTree(preorder, inorder, p1 + 1, p1 + nLeft, i1, index - 1),
    buildTree(preorder, inorder, p1 + nLeft + 1, p2, index + 1, i2),
  );
};

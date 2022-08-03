/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [],
    stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;

    result.push(node.val);
    node.children.reduceRight((acc, cur) => (acc.push(cur), acc), stack);
  }

  return result;
};

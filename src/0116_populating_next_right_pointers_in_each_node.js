/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const levels = [];
  const stack = [{ depth: 0, node: root }];

  while (stack.length) {
    let { depth, node } = stack.pop();
    if (!node) continue;
    if (!levels[depth]) levels[depth] = [];
    levels[depth].push(node);
    depth += 1;
    stack.push({ depth, node: node.right }, { depth, node: node.left });
  }

  for (let depth = 0; depth < levels.length; depth++) {
    const level = levels[depth];
    let i = 0;
    while (i < level.length - 1) {
      const node = level[i];
      node.next = level[i + 1];
      i++;
    }
    level[level.length - 1].next = null;
  }

  return root;
};

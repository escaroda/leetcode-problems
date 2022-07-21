/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let current = head,
    previous = null,
    next = null;

  while (left > 1) {
    previous = current;
    current = current.next;
    left--;
    right--;
  }

  let con = previous,
    tail = current;

  while (right) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    right--;
  }

  if (con) {
    con.next = previous;
  } else {
    head = previous
  }

  tail.next = current;

  return head;
};

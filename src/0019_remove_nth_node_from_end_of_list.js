/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head,
    delayed = head;

  while (n--) {
    current = current.next;
  }
  if (!current) return head.next;

  while (current.next) {
    current = current.next;
    delayed = delayed.next;
  }

  delayed.next = delayed.next.next;
  return head;
};

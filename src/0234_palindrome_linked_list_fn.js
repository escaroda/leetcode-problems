/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let previous = null,
    next = null,
    current = head;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    slow = slow.next;
  }

  let reverse = reverseList(slow),
    current = head;

  while (reverse) {
    if (current.val !== reverse.val) {
      return false;
    }
    reverse = reverse.next;
    current = current.next;
  }

  return true;
};

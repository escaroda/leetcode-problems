/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let rvrs = null,
    slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    [rvrs, rvrs.next, slow] = [slow, rvrs, slow.next];
  }

  if (fast) {
    slow = slow.next;
  }

  while (rvrs) {
    if (rvrs.val !== slow.val) {
      return false;
    }
    rvrs = rvrs.next;
    slow = slow.next;
  }

  return true;
};

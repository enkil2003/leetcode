/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

function arrayToLinkedList(arr) {
  let head = null;
  let tail = null;
  for (let val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }
  return head;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (head === null) {
    return true;
  }

  // Find the end of the first half and reverse the second half.
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  // Check whether or not there's a palindrome.
  let result = true;
  let firstPosition = head;
  let secondPosition = secondHalfStart;
  while (result && secondPosition !== null) {
    if (firstPosition.val !== secondPosition.val) {
      result = false;
    }
    firstPosition = firstPosition.next;
    secondPosition = secondPosition.next;
  }

  // Restore the list and return the result.
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
}

function endOfFirstHalf(head) {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head) {
  let previous = null;
  let current = head;
  while (current !== null) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }
  return previous;
}

isPalindrome(arrayToLinkedList([1, 2, 3, 3, 2, 1]));
// @lc code=end

/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) return -1;

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);

  node.next = this.head;
  this.head = node;
  this.size++;

  return;
};

MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size == 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;

  while (curr.next != null) {
    curr = curr.next;
  }

  const node = new Node(val);

  curr.next = node;
  this.size++;

  return;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;

  if (index == 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  const next = curr.next;
  const node = new Node(val);

  curr.next = node;
  node.next = next;
  this.size++;

  return;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size) return;

  if (index == 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
  this.size--;

  return;
};

// Your MyLinkedList object will be instantiated and called as such:
// var obj = new MyLinkedList();
// // var param_1 = obj.get(index);
// obj.addAtTail(0); // 0
// obj.addAtTail(1); // 1
// obj.addAtTail(2); // 2
// obj.addAtTail(3); // 3
// obj.addAtTail(4); // 4
// obj.deleteAtIndex(2);
// obj.addAtIndex(1, 15);

// @lc code=end

/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function () {
  this.queue = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
// 1, 2, 3, 4, 5, 6
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length) {
    this.queue2.push(this.queue.pop());
  }

  const popped = this.queue2.pop();

  this.queue = [...this.queue2];
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 */
// let myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
// @lc code=end

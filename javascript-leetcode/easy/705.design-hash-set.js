/*
 * @lc app=leetcode id=705 lang=javascript
 *
 * [705] Design HashSet
 */

// @lc code=start
const ListNode = function (key) {
  this.key = key;
  this.next = null;
};

var MyHashSet = function () {
  this.mySet = new Array(10000).map((idx) => new ListNode(idx));
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = key % this.mySet.length;
  const cur = this.mySet[hash];

  while (cur.next) {
    if (cur.next.key === key) return;
    cur = cur.next;
  }
  cur.next = new ListNode(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = key % this.mySet.length;
  const cur = this.mySet[hash];

  while (cur.next) {
    if (cur.next.key === key) {
      cur.next = cur.next.next;
      return;
    }
    cur = cur.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = key % this.mySet.length;
  const cur = this.mySet[hash];

  while (cur.next) {
    if (cur.next.key === key) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

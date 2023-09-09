/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function () {
  this.store = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store[key]) {
    this.store[key] = [];
  }
  this.store[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let values = this.store[key] || [];
  let l = 0;
  let r = values.length - 1;
  let res = "";

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    let [value, ts] = values[mid];

    if (ts <= timestamp) {
      res = value;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

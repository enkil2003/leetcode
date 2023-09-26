/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let asteroid of asteroids) {
    while (stack.length !== 0 && asteroid < 0 && stack.at(-1) > 0) {
      let diff = asteroid + stack.at(-1);

      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        asteroid = 0;
        stack.pop();
      }
    }

    if (asteroid) {
      stack.push(asteroid);
    }
  }
  return stack;
};
// @lc code=end

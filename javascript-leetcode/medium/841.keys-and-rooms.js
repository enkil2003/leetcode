/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(false);

  const dfs = (currentRoomKey) => {
    visited[currentRoomKey] = true;
    for (let foundKey of rooms[currentRoomKey]) {
      if (!visited[foundKey]) {
        dfs(foundKey);
      }
    }
  };

  dfs(0);
  return !visited.some((room) => !room);
};
canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]);
// @lc code=end

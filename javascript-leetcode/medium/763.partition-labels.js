/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(S) {
  const last = new Array(26);
  for (let i = 0; i < S.length; ++i) {
    last[S.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  let j = 0;
  let anchor = 0;
  const ans = [];
  for (let i = 0; i < S.length; ++i) {
    j = Math.max(j, last[S.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === j) {
      ans.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return ans;
}
partitionLabels("ababcbacadefegdehijhklij");
// @lc code=end

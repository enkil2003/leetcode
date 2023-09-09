/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailAddresses = new Set();
  for (const email of emails) {
    let [name, domain] = email.split("@");
    name = name.replace(/\./g, "").split("+")[0];
    const curatedEmail = name + "@" + domain;
    emailAddresses.add(curatedEmail);
  }
  return emailAddresses.size;
};
// @lc code=end

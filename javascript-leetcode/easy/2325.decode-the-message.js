/*
 * @lc app=leetcode id=2325 lang=javascript
 *
 * [2325] Decode the Message
 */

// @lc code=start
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
  // create a constant dictionary to hold
  // the letters that will map to each letter
  const dictionary = {};

  // 'z'.charCodeAt(0) -> 122
  const zCharCode = 122;
  // 'a'.charCodeAt(0) -> 97
  let currentCharCode = 97;
  // pointer to keep track of where we are at in the key
  let keyIndex = 0;
  // construct dictionary
  while (currentCharCode <= zCharCode) {
    const keyLetter = key[keyIndex];
    if (dictionary[keyLetter] === undefined && keyLetter !== " ") {
      dictionary[keyLetter] = String.fromCharCode(currentCharCode);
      currentCharCode++;
    }
    keyIndex++;
  }

  let decodedMessage = "";
  // simply map each letter in the dictionary
  for (let i = 0; i < message.length; i++) {
    const messageLetter = message[i];
    if (messageLetter !== " ") {
      decodedMessage += dictionary[messageLetter];
    } else {
      decodedMessage += " ";
    }
  }
  return decodedMessage;
};
// @lc code=end

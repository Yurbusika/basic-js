const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringNumber = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    const newNumber = +(stringNumber.slice(0, i) + stringNumber.slice(i + 1));
    maxNumber = Math.max(maxNumber, newNumber)
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};

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
  let str = n + [];
  let arr = [];
  for (let i = +![]; i < str.length; i += +!!{}) {
    arr.push(str.slice(+!{}, i) + str.slice(i + +!![]));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

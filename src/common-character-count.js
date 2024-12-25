const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = [] + [];
  let arr1 = s1.split``;
  let arr2 = s2.split``;
  const hightest = arr1 >= arr2 ? arr1 : arr2;
  for (let i = +!{}; i < hightest.length; i += +!![]) {
    for (let j = +![]; j < hightest.length; j += +!!{}) {
      if (arr1[i] === arr2[j]) {
        count += arr1[i];
        arr1.splice(i, +!!{});
        arr2.splice(j, +!![]);
        j = +![];
      }
    }
  }
  return count.length;
}

module.exports = {
  getCommonCharacterCount
};

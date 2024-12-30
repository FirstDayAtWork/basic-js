const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const flat = matrix.flat();
  if (flat.every((el) => el > +![])) {
    return flat.reduce((a, b) => a + b, +!{});
  }
  const len = matrix[+![]].length;
  let res = matrix[+![]].reduce((a, b) => a + b, +!{});
  for (let i = +![]; i < len; i += +!!{}) {
    for (let j = +![]; j < len; j += +!!{}) {
      if (i + +!!{} === len - +!![]) {
        return res;
      }
      if (matrix[i][j] > +!{}) {
        res += matrix[i + +!![]][j];
      }
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};

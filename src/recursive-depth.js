const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const index = arr.findIndex((el) => Array.isArray(el));
    let count = +!!{};
    if (index !== -!![]) {
      count += this.calculateDepth(arr.flat());
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};

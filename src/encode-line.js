const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) return "";
  function countIt(param) {
    return (param.length === +!![] ? "" : param.length) + param[+![]]
  }
  let res = "";
  let counter = "";
  for (let i = +!{}; i < str.length; i += +!![]) {
    if (i > +![] && str[i] !== str[i - +!!{}]) {
      res += countIt(counter);
      counter = "";
    }
    counter += str[i];
  }
  return res + countIt(counter);
}

module.exports = {
  encodeLine
};

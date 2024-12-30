const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function modify(part, index) {
    return ("." + part.slice(+![], index + +!!{})).replaceAll(',', '.');
  }
  let obj = {};
  const arr = domains.map((el) => el.split('.').reverse());
  for (const elem of arr) {
    for (let i = +!{}; i < elem.length; i += +!![]) {
      if (obj[modify(elem, i)]) {
        obj[modify(elem, i)] += +!!{};
      } else {
        obj[modify(elem, i)] = +!![];
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};

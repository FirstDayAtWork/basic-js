const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.toString() === Date.prototype.toString.call(new Date()) 
      || Object.prototype.toString.call(date) !== "[object Date]")
  {
    throw Error('Invalid date!');
  }
  const map = new Map()
  .set('spring', [2, 3, 4])
  .set('summer', [5, 6, 7])
  .set('autumn', [8, 9, 10])
  .set('winter', [0, 1, 11])
  const month = date.getMonth();
  for (const [key, value] of map.entries()) {
    if (value.includes(month)) {
      return key;
    }
  }
}

module.exports = {
  getSeason
};

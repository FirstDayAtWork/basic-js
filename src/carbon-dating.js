const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (+sampleActivity === +![] ||
      typeof sampleActivity !== "string" ||
      isNaN(+sampleActivity) ||
      !isFinite(sampleActivity)
     ) 
  {
    return ![];
  }
  const a = Math.log(MODERN_ACTIVITY / sampleActivity);
  const k = Math.log(+!![] + +!!{}) / HALF_LIFE_PERIOD;
  const res = Math.ceil(a / k);
  return res > +![] ? res : !{};
}

module.exports = {
  dateSample
};

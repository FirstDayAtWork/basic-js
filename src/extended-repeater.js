const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
        repeatTimes = +![],
        separator = '+',
        addition = '',
        additionRepeatTimes = +!{},
        additionSeparator = '|'
      } = options;
  if (`${addition}` === "STRING_OR_DEFAULT") {
    additionRepeatTimes += +!![];
  }
  let part = [] + [];
  let res = [] + [];
  if (repeatTimes === +![]) {
    res += str;
  }
  if (additionRepeatTimes === +!{}) {
    res += addition;
  }
  for (let i = +![]; i < repeatTimes; i += +!!{}) {
    for (let k = +!{}; k < additionRepeatTimes; k += +!![]) {
      if (k + +!!{} === additionRepeatTimes) {
        part += addition;      
      } else {
        part += addition + additionSeparator;
      }
    }
    if (i + +!![] === repeatTimes) {
      res += str + part;      
    } else {
      res += str + part + separator;
    }
    part = [] + [];
  }
  return res;
}

module.exports = {
  repeater
};

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
  str = String(str);

  const separator = options.separator ?? '+';
  const repeatTimes = options.repeatTimes ?? 1;
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionSeparator = options.additionSeparator ?? '|';
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;

  const additionPart = [];
  if (additionRepeatTimes > 1) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionPart.push(addition);
    }
    additionPart.join(additionSeparator);
  } else {
    additionPart.push(addition);
  }

  const result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + additionPart.join(additionSeparator));
  }
  return result.join(separator);
}

module.exports = {
  repeater
};

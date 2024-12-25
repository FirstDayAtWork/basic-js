const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) return [];
  const regex = /--discard-next|--discard-prev|--double-next|--double-prev/g;
  if (arr.every((el) => !`$${el}`
      .match(regex))
  ) {
    return arr;
  }
  let clone = arr.filter((el) => !`${el}`
    .match(regex)
  );
  let pos = 0;
  let obj = { isDiscarded: false };

  const map = new Map()
  .set("--discard-next", (arr, pos, obj) => {
    obj.isDiscarded = true; 
    arr.splice(pos, 1);
  })
  .set("--discard-prev", (arr, pos, obj) => {
    if (obj.isDiscarded) return;
    arr.splice(pos - 1, 1);
  })
  .set("--double-next", (arr, pos) => arr.splice(pos, 0, arr[pos]))
  .set("--double-prev", (arr, pos, obj) => {
    if (obj.isDiscarded) return;
    arr.splice(pos - 1, 0, arr[pos - 1])
  })

  arr.map((el, i) => {
    if (map.has(el)
        && el !== arr[0]
        && el !== arr[arr.length - 1]
       )
    {
      map.get(el)(clone, i, obj);
    }
  })
  return clone;
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.value.length;
  },
  addLink(value = "") {
    this.value = this.value || ""
    if (!this.value) {
        this.value = `( ${value} )`;
        return this;
    }
    this.value += `~~( ${value} )`;
    return this;
  },
  removeLink(position) {
    this.value = this.value.split`~~`;
    if (typeof position !== 'number' ||
       position < +!![] ||
       position > this.value.length
      )
    {
      this.value = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.value.splice(position - +!![], +!!{});
    this.value = this.value.join`~~`;
    return this;
  },
  reverseChain() {
    this.value = this.value.split`~~`.reverse().join`~~`;
    return this;
  },
  finishChain() {
    const res = this.value;
    this.value = '';
    return res;
  }
};

module.exports = {
  chainMaker
};

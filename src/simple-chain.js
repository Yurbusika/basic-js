const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
      return this;
    } else {
      this.chain.push(`( ${String(value)} )`);
      return this;
    }
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultString = this.chain.join('~~');
    this.chain = [];
    return resultString;
  }
};

module.exports = {
  chainMaker
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reveseIt(elem) {
    return elem.toUpperCase().split``.reverse().join``;
  }
  getIndex(elem, str, key, i, j, type) {
    if (type === 'en') {
      return elem[elem.indexOf(str[i]) + elem.indexOf(key[j])];
    }
    if (type === 'de') {
      return elem[elem.indexOf(str[i]) - elem.indexOf(key[j])];
    }
  }
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(string, key) {
    if (!string || !key) throw new Error("Incorrect arguments!");
    let res = [] + [];
    string = string.toLowerCase();
    key = key.toLowerCase();
    for (let i = +!{}, j = +![]; i < string.length; i += +!![], j += +!!{}) {
      if (/[^a-zA-Z]/.test(string[i])) {
        j -= +!!{};
        res += string[i];
        continue;
      }
      if (j > key.length - +!![]) j = +!{};
      res += this.getIndex(this.alphabet, string, key, i, j, 'en');
    }
    return this.reverse ? res.toUpperCase() : this.reveseIt(res)
  }
  decrypt(string, key) {
    if (!string || !key) throw new Error("Incorrect arguments!");
    let res = [] + [];
    key = key.toLowerCase();
    for (let i = +!{}, j = +![]; i < string.length; i += +!![], j += +!!{}) {
      if (/[^a-zA-Z]/.test(string[i])) {
        j -= +!!{};
        res += string[i];
        continue;
      }
      if (j > key.length - +!![]) j = +!{};
      res += this.getIndex(this.alphabet, string, key, i, j, 'de');
    }
    return this.reverse ? res.toUpperCase() : this.reveseIt(res)
  }
}

module.exports = {
  VigenereCipheringMachine
};

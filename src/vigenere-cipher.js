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
  constructor (isDirect = true) {
    this.isDirect = isDirect;
    this.alphabetSize = 26;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const m = message.charCodeAt(i);
        const k = key.charCodeAt(keyIndex % key.length);
        const c = (m + k) % this.alphabetSize;
        result += String.fromCharCode(c + 65);

        keyIndex++;
      } else {
        result += message[i];
      }
    }
      return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage|| !key) {
      throw new Error('Incorrect arguments!');
    }
    const message = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const c = message.charCodeAt(i);
        const k = key.charCodeAt(keyIndex % key.length);
        const m = (c - k + this.alphabetSize) % this.alphabetSize;
        result += String.fromCharCode(m + 65);

        keyIndex++;
      } else {
        result += message[i];
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};

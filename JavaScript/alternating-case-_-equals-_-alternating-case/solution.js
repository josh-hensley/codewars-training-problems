String.prototype.toAlternatingCase = function () {
  let letters = this.split('');
  const alternatingLetters = letters.map(letter=>{
    if (letter.toLowerCase() === letter){
      console.log(letter)
      return letter.toUpperCase()
    }
    else {
      console.log(letter, ' but uppercase')
      return letter.toLowerCase()
    }
  })
  return alternatingLetters.join('')
}
const { assert } = require('chai');
​
describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    assert.strictEqual("12345".toAlternatingCase(), "12345");
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  });
});
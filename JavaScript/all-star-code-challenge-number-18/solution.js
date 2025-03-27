function strCount(str, letter){
  return str.split('').filter(l=>l.includes(letter)).length
}
const { assert } = require('chai');
​
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});
​
function noBoringZeros(n) {
  while (true){
    if (n % 10 == 0 && n != 0){
      n = n/10;
      console.log(n)
      continue;
    }
    else {
      return n;
    }
  }
}
const Test = require('@codewars/test-compat');
​
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("Basic tests",function() {
  it("noBoringZeros",function() {
    assert.strictEqual(noBoringZeros(1450), 145)
    assert.strictEqual(noBoringZeros(960000), 96)
    assert.strictEqual(noBoringZeros(1050), 105)
    assert.strictEqual(noBoringZeros(-1050), -105)
    assert.strictEqual(noBoringZeros(-105), -105)
    assert.strictEqual(noBoringZeros(0), 0)
  })
})
​
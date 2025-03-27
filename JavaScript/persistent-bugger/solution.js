function persistence(num) {
  let persistance = 0;
  let digits = num.toString().split('').map(num=>parseInt(num));
  let product;
  while (digits.length > 1){
    product = digits.reduce((prev, curr)=>curr * prev, 1);
    digits = product.toString().split('').map(num=>parseInt(num));
    persistance++;
  }
  return persistance;
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });
});
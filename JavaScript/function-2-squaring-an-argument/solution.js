const square = n => n**2;
const { assert } = require('chai');
​
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
​
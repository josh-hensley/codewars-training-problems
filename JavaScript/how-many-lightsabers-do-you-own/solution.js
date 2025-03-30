function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}
const { assert } = require("chai")
​
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual( howManyLightsabersDoYouOwn(), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Adam"), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Zach"), 18 )
    })
})
function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, `!`);
}
describe("Basic Tests", function () {
    it("It should work for sample tests", function () {
        doTest("Hi!", "H!!");
        doTest("!Hi! Hi!", "!H!! H!!");
        doTest("aeiou", "!!!!!");
        doTest("ABCDE", "!BCD!");
    });
​
    const { assert } = require('chai');
​
    function doTest(input, expected) {
        const message = `for s = ${JSON.stringify(input)}\n`;
        const actual = replace(input);
        assert.strictEqual(actual, expected, message);
    }
});
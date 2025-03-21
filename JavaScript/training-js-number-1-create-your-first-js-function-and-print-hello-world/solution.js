function helloWorld(){
  const str = 'Hello World!';
  console.log(str);
}
const { assert } = require('chai');
describe("Tests", () => {
  it("test", () => {
    assert.isFunction(helloWorld, "function helloWorld is not defined")
    helloWorld();
  });
});
​
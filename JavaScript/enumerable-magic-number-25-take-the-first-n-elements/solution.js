function take(arr, n) {
  return arr.slice(0,n)
}
const Test = require('@codewars/test-compat');
​
describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});
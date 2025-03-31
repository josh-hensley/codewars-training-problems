export function addBinary(a:number,b:number):string {
  return (a + b).toString(2);
}
import { assert,expect } from "chai";
import { addBinary } from "./solution";
​
describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    assert.equal(results1, "11");
  });
});
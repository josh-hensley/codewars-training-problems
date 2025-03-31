export function nearestSq(n : number) : number {
  let low: number = 0;
  let high: number = 0;
  for (let i = 0; high < n; i++){
    low = i * i;
    high = (i+1) * (i+1);
  }
  const lowDiff = n - low;
  const highDiff = high - n;
  return lowDiff < highDiff ? low : high;
}
// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
​
import { nearestSq } from "./solution";
​
describe("Basic tests",() => {
  it('basic tests', () => {
    assert.equal(nearestSq(1), 1);
    assert.equal(nearestSq(2), 1);
    assert.equal(nearestSq(10), 9);
    assert.equal(nearestSq(111), 121);
    assert.equal(nearestSq(9999), 10000);
  })
});
function finalGrade (exam, projects) { 
  return exam > 90 || projects > 10 ? 100 :
    exam > 75 && projects >= 5 ? 90 :
    exam > 50 && projects >= 2 ? 75 :
    0
  
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {  
    assert.strictEqual(finalGrade(100, 12), 100);
    assert.strictEqual(finalGrade(85, 5), 90);
  });
});
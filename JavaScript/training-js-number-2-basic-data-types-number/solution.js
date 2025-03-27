let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;
​
function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}
​
//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}
​
function equal3(){
  let a =  v5, //set number value to a
      b =  v1; //set number value to b
  return a * b;
}
​
function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}
​
function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}
const { assert } = require('chai');
​
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(equal1(), 100, "value of a+b is not equal to 100");
    assert.strictEqual(equal2(), 100, "value of a-b is not equal to 100");
    assert.strictEqual(equal3(), 100, "value of a*b is not equal to 100");
    assert.strictEqual(equal4(), 100, "value of a/b is not equal to 100");
    assert.strictEqual(equal5(), 100, "value of a%b is not equal to 100");
  });
});
​
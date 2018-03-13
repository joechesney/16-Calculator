const multiply = require('../js/multiply.js');
const { assert: { isFunction, isNumber, strictEqual } } = require('chai');

describe("multiply()", ()=>{
  it("should be a function", ()=>{
    isFunction(multiply);
  });
  it("should return a number",()=>{
    isNumber(multiply([2,3]));
  });
  it("should have the same quotient",()=>{
    strictEqual((5*7), multiply([5,7]));
  });
});
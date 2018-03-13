const divide = require('../js/divide.js');
const { assert: { isFunction, isNumber, strictEqual } } = require('chai');

describe("divide()", ()=>{
  it("should be a function", ()=>{
    isFunction(divide);
  });
  it("should return a number",()=>{
    isNumber(divide([2,3]));
  });
  it("should have the same dividend",()=>{
    strictEqual((8/4), divide([8,4]));
  });
});
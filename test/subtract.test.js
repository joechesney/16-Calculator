const subtract = require('../js/subtract.js');
const { assert: { isFunction, isNumber, strictEqual } } = require('chai');

describe("subtract()", ()=>{
  it("should be a function", ()=>{
    isFunction(subtract);
  });
  it("should return a number",()=>{
    isNumber(subtract([5,3]));
  });
  it("should have the same quotient",()=>{
    strictEqual((9-3), subtract([9,3]));
  });
});
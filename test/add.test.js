const add = require('../js/add.js');
const { assert: { isFunction, isNumber, strictEqual } } = require('chai');

describe("add()", ()=>{
  it("should be a function", ()=>{
    isFunction(add);
  });
  it("should return a number",()=>{
    isNumber(add([2,3]));
  });
  it("should have the same sum",()=>{
    strictEqual((3+4+5), add([3,4,5]));
  });
});
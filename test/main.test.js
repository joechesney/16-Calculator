const { calculate } = require('../js/main.js');
const { assert: { isFunction, isNumber, isString, strictEqual } } = require('chai');

describe("operator", ()=>{
  const operatorTestA = "add";
  const operatorTestS = "subtract";
  const operatorTestD = "divide";
  const operatorTestM = "multiply";
  it("should be a string", ()=>{
    isString(operatorTestA);
    isString(operatorTestS);
    isString(operatorTestD);
    isString(operatorTestM);
  });
});
describe("calculate()", ()=>{
  it("should return a number", ()=>{
    isNumber(calculate("add", [5,6]));
    isNumber(calculate("subtract", [5,6]));
    isNumber(calculate("multiply", [5,6]));
    isNumber(calculate("divide", [5,6]));
  });
});
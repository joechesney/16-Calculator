#!/usr/bin/env node
const add = require("./add"),
subtract = require("./subtract"),
divide = require("./divide"),
multiply = require("./multiply");

[,,operator] = process.argv,
[,,,...nums] = process.argv;
const print = process.stdout.write;

const calculate = (operator,nums) =>{
  nums = nums.map(num=>+num);
  if(operator && nums){
    console.log('op n nums: ',operator, nums);
    let result = (operator === "add") ? add(nums): 
    (operator === "subtract") ? subtract(nums): 
    (operator === "divide") ? divide(nums): 
    (operator === "multiply") ? multiply(nums): -10000;
    console.log('result: ',result);
    return result;
  }
}
if(operator && nums){calculate(operator,nums)}

module.exports = {
  calculate
}
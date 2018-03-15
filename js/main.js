#!/usr/bin/env node

let myMaths = {
  add: require("./add"),
  subtract: require("./subtract"),
  divide: require("./divide"),
  multiply: require("./multiply")
};


[,,operator] = process.argv,
[,,,...nums] = process.argv;
const print = process.stdout.write;


const calculate = (operator,nums) =>{
  nums = nums.map(num=>+num);
  if(operator && nums){
    console.log('op n nums: ',operator, nums);
    let result = myMaths[operator](nums);
    console.log('result: ',result);
    return result;
  }
}
if(operator && nums){
  if((operator === "add" ||
    operator === "subtract"||
    operator === "divide"||
    operator === "multiply")&&(nums.length > 0)){
      calculate(operator,nums)
  }else{
    process.stdout.write("please enter an operator and at least 2 numbers in the following format: [operator][space][number][space][number]\n example: add 5 6")
  }
}

module.exports = {
  calculate
}

module.exports = (nums) =>{
  console.log('nums:',nums);
  return nums.reduce((sum, each) =>{
    return sum/each;
  });
};
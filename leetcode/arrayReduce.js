// var reduce = function(nums, fn, init) {
//     let val
//   for (let i = 0; i < nums.length; i++) {
    
//     init += nums[i]
    
//     } 
//     return fn(init, 0)
// };

var reduce = function(nums, fn, init) {
    let val
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i])
  }
    return init;
};

nums = []
init = 25;
fn = function sum(accum, curr) { return accum + curr; }
// let result = reduce(nums, fn, init);
let result = reduce(nums, fn, init)
console.log('sum ', result)
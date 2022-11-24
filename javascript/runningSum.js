/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  //   let sum = [nums.length];
  // sum[0] = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   sum[i] = sum[i - 1] + nums[i];
  // }
  // return sum;
  let sum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    result.push(sum);
  }
  return result;
};

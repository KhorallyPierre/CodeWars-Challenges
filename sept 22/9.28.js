// Given a non-empty array of integers nums, every element appears twice except for one. 
//Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
 let map = {}
 for (let i =0; i < nums.length; i++){
    let num = nums[i]
    if (map[num]){
        nums[i]++
    } else {
        map[num] = 1 
    }
 }
 for (const num in map){
    if (map[num] === 1){
        return num
    }
 }
};
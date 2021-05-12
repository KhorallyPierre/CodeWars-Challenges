// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

function sumOf(arr){
  let sum = arr.reduce((acc, curr) => acc + curr, 0) - (Math.max(...arr) + Math.min(...arr))
  return sum
}
console.log(sumOf([1,2,3,4,5,6]))

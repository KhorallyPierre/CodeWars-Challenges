// Given a non-empty array of integers, return the result of multiplying the values
// together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function multiplyVals(arr){
  let product = arr.reduce((acc, cur) => acc * cur, 1)
  return product
}
console.log(multiplyVals([3,2,5]))

multiplyVals(arr)

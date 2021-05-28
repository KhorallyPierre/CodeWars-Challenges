//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product.
// for each indicates we need to use a loop


function arrayThing(arr){
  let product = 1
  for (let i =0; i < arr.length; i++){
    // console.log(arr[i])
    product *= arr[i]
  }
  return product

}
console.log(arrayThing([1,2,3,4,5,6,7,8]))
// alert(mult)
// console.log(arr(50, 3))

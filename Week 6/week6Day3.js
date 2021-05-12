// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//
// Task
// Implement a function named

// generateRange(1, 10, 3) // should return array of [1,4,7,10]

function generateRange(min, max, step){
  let arr = [];
  for (let i = min; i<= max; i+=step){
    arr.push(i)
  }
  return arr
}

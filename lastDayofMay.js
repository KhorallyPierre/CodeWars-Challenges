// create a
//
// function that prints numbers 1 - x where x is the number that’ s passed in .
// If the number is divisible by 3 print fizz,
// if by 5, print buzz.
// if divisible by 3 AND 5 print fizzbuzz

function fizzbuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      console.log('fizzbuzz')
    } else if (arr[i] % 3 === 0) {
      console.log('fizz')
    } else if (arr[i] % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(arr[i])
    }
  }
}
fizzbuzz([1,2,3,3,4,45,7,8,8,9, 10,11,12,13,15])

// If we list all the natural numbers below 10 that are multiples
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// find multiples of 3 or 5 below 1000
// add those multiples together
// p - 1000 - num
// r - returning sum the multiples of 1000 (to achieve this, we need to find the multiples first)
// e - 12, numbers that are muliples of 2 and 3 - this includes 2,3, 4, 6, 8, 9, 10
// find the sum of these numbers  2 + 3 + 4 + 6 + 8 + 9 + 10
// sum = 42
// p - function that finds multiples of 3 or 5 below 1000

function multipleAndSum(num){
  let sum = 0
  for (let i = 1; i <= num; i++){
    if ( i % 3 === 0 || i % 5 === 0){
      sum = sum + i
    }
  }
  return sum
}
console.log(multipleAndSum(1000))

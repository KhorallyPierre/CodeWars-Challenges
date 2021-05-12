// If we list all the positive numbers below 10
// that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below n.

function sumOfMultiples(n) {
 let array = []
 for (let i =0; i < n; i++){
   if (i % 3 === 0){
     array.push(i)
   } else if (i % 5 === 0){
     array.push(i)
   }
 }
  let sum = array.reduce((acc, x) => acc + x, 0)
  return sum
}

console.log(sumOfMultiples(10), sumOfMultiples(1000));

// parameter will b n (represents a number greater than 0)
// returnining the sum of the multiplies of 3 or 5 below n
// example / pseudo code:  2, 3 below 7 - create an array - that holds the multiples 2, and 3 below 7, use a method to add those numbers - return the sum 

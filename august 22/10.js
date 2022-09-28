// 10.js


// /create a function that takes in 4 numbers. 
// // Multiply the first two numbers.
// // If the product is greater than 100 add the sum of the last two numbers
//  and console log the value.// If the product is less that 100, subtract 
//  the difference of the last two numbers and console log the value.
//  // If the product is 100, multiply the first three numbers together
// // and alert the remainder of dividing the fourth number,

// function take4(z, y ,w ,d){
//     let product = z * y
//     if (product > 100){
//         result = w + d 
//     } else if (product < 100){
//         result =  w - d 
//     } else if (product === 100){
//         result = z * y * w % d
//         alert(result)
//     }
// }

// take4(10, 2, 4, 3)
// console.log(result)

function take4(num1, num2, num3, num4){ 
     let product = num1 * num2 
      let sum = num3 + num4 
       let difference = num3 - num4  
       if (product > 100){  
           console.log(sum) 
         }  if (product <100){  
              console.log(difference) 
             }  if (product === 100){  
                  alert((product * num3) % num4) 
                 }
                }
console.log(take4(10,2,4,3))

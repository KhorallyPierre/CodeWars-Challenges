// Create a function that takes 2 positive integers in form of a string as an input,
//  and outputs the sum (also as a string):
//
//  p two positive numbers
//  r sum as a string
//  e
//  p two parameters , return these parmeters added and then converted to a string

 function sumStr(a, b){
   let z = parseInt(a)
   let x = parseInt(b)
   let sum = z + x
   return String(sum)
 }
 console.log(sumStr('5', '4'))

//Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):

// https://www.codewars.com/kata/5966e33c4e686b508700002d

// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"


function sumStr(a,b) {
  let num1 = Number(a)
  let num2 = Number(b)
  let sum = num1 + num2
  return sum.toString()
}


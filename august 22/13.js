// 13.js

// Create a function that takes 2 positive integers in form of a string as an input, 
// and outputs the sum (also as a string): 

// pseudo code: function has two parameters 
// those two parameters are two numbers that are strings 
// the function takes those two strings, converts them to numbers, 
// adds the numbers
// the converts them back to a string 
// Number() and parseInt() are the same in this context




function sumStr(a,b){ 
    let numberVal = (+a + +b) 
    let stringVal = numberVal.toString(a, b)
    // return stringVal
    console.log(stringVal)
}

(sumStr('10', '2'))
    // +a 
    // means convert a string to a number
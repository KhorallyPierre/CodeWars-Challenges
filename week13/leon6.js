// Create a function that will return a string that combines all of the letters of the
// three inputed strings in groups. Taking the first letter of all of the inputs and grouping
//  them next to each other. Do this for every letter, see example below!
// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"
// Note: You can expect all of the inputs to be the same length.
//
// p - 3 strings
// return - new string
// exampel: Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// create a function with string as a parameter, declare new string as empty string, for loop over first parameter, update string to be equal to string1 + string2 + string3
// return new string
// cal functuin

function newStringsHere(string1, string2, string3){
  let newString = ''
  for (let i = 0; i < string1.length; i++){
    newString = newString + string1.charAt(i) + string2.charAt(i) + string3.charAt(i)
  }
  return newString
}
console.log(newStringsHere('hello' ,'there', 'bernard'))

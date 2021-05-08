// In this kata, you've to count lowercase letters in a given string and return
// the letter count in a hash with 'letter' as key and count as 'value'. The key must be
//  'symbol' instead of string in Ruby and 'char' instead of string in Crystal.




function letterCount(s){
 let arrayS = s.split('')
 let letterAmount = {}
 for (let i = 0; i < arrayS.length; i++){
   let theLetter = arrayS[i] //create variable theLetter and assign it the value
   // of the current letter (indexed by i)

   console.log(arrayS[i])
   if (letterAmount[theLetter]){
     letterAmount[theLetter] = letterAmount[theLetter] + 1
     //  letterAmount[theLetter] ++ this is a shorter way of writing the same thing
     // letter amount increments if its not the first occurence
     console.log(letterAmount[theLetter])
   } else {
     letterAmount[theLetter] = 1
     //each letter in the array becomes a property
   // inside the once empty object, the value is 0 for now
//      console.log( letterAmount[theLetter])
   }
 }
  console.log(letterAmount)
  return letterAmount

}

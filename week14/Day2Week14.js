// write function longest repeat
// takes in a string
// string will have characters repeated
// return longest continuous block of characters
// longest_repeat(“aabbbbcddd”) is 4 (4 consecutive b’s)
// longest_repeat(“abbaaab”) is 3 (3 consecutive a’s)
// longest_repeat(“abcdef”) is 1
//
// parameter - string
// retruning amount of occurances for the longest block of characters (longest)
// e - long_repeat("rrrttyeeye") is 3 (3 consecutive r's)
// p use for loop to assess number occurances, we need a counter to keep track of occurances,
// we will be using indexes to compare current index with previous index


function longest_repeat(string){
  let longest = 0
  for (let i=1; i < string.length; i++){
    if (string[i] === string[i - 1] ){
      if (string[i] )
      longest++
    }
  }
  return longest
}
console.log(longest_repeat("aaabbbbbcab"))

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
// Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');


// p array of string
// r - string sorted alphabetically, and first value with***
// e -
// p sorted string alphabetically
// p capitalized letters go first

function twoSort(s) {
let newArr = s.sort()
let newArr2 = newArr[0].split("").join("***")
return newArr2

}

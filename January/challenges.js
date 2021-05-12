Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function family(array){
    let max = Math.max(...array)
    let min = Math.min(...array)
    let difference = max  - min 
    let newArray = [min, max, difference]
    return newArray 
}
family([23, 12, 34, 52])

Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


Create a function that alternates the case of a given string.
Ex. HeLLo WoRLd => hEllO wOrlD


Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"
Note: You can expect all of the inputs to be the same length.

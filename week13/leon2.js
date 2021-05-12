// You will be given an array of all the family members' ages, in any order.
//  The ages will be given in whole numbers, so a baby of 5 months, will have
//   an ascribed 'age' of 0. Return a new array with [youngest age, oldest age,
//     difference between the youngest and oldest age].

function family(array){
    let max = Math.max(...array)
    let min = Math.min(...array)
    let difference = max  - min
    let newArray = [min, max, difference]
    return newArray
}
console.log(family([23, 12, 34, 52]))

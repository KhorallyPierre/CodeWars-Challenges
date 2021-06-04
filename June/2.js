// Write a program that:
// • Creates an array named musketeers containing values “Athos”, “Porthos” and “Aramis”.
// • Shows each array element using a for loop.
// • Adds the “D’Artagnan” value to the array.
// • Shows each array element using the forEach() method.
// • Remove poor Aramis.
// • Shows each array element using a for-of loop

function createArr() {
  let arr = ["Athos", "Porthos", "Aramis"]
  for (let i = 0; i < arr.length; i++) {
    arr.pop()
    arr.push("D'Artagnan")
    return arr
  }
  arr.forEach(musketeer => console.log(musketeer))
  for (const musketeer of arr) {
    console.log(musketeer)
  }
}
console.log(createArr())
//

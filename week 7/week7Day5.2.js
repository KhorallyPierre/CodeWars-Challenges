// Calculate how many times a number can be divided by a given number.
//
// Example
// For example the number 6 can be divided by 2 two times:
const divisions = (n, d) => {
  let numDiv = 0
  while (n >= d) {
    numDiv +=1;
    n = Math.floor(n / d)
  }
  return numDiv
};

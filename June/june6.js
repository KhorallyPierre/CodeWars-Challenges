// Your task is to find the first element of an array that is not consecutive.
//
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
//
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//
// If the whole array is consecutive then return null2.



function firstNonConsecutive(arr) {
  // Initialize default value to increment
  let first = arr[0];
  // Establish a variable to collect the non consecutive integer
  let nonConInt = null;
  for (let i = 1; i < arr.length; i++) {
    // If prev value is not equal to the next element array val
    if ((first + 1) !== arr[i]) {
      // You've found your first non consecutive and break
      nonConInt = arr[i];
      break;
    } else {
      first ++;
    }
  }
  // return null if first is never set
  return nonConInt !== undefined ? nonConInt : null;
}

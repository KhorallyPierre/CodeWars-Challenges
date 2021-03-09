// Coding in function blackAndWhite.
// function accepts 1 parameter arr(a number array).
//
// If arr is not an array, the function should return:
//
// "It's a fake array"
// If arr contains elements 5 and 13, the function should return:
//
// "It's a black array"
// If arr doesnt contain 5 and 13, the function should return:
//
// "It's a white array"


function blackAndWhite(arr){
  if (arr.constructor !== Array){
    return "It's a fake array"
  } if (arr.includes(5, 0) && arr.includes(13, 0)){
        return "It's a black array"
    } else {
      return "It's a white array"
    }
  }

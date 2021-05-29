// Create a function that takes in an array. If the first number, is less than the last number,
// alert "Hi". If the first number is greater than the last number, alert "Bye".
// If they are equal, alert "We close in an hour".


function takeArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr.slice(-1)[0]) {
      console.log('HI!')
    } else if (arr[0] > arr.slice(-1)[0] ) {
      console.log('Bye!')
    } else if (arr[0] === arr.slice(-1)[0] ) {
      console.log('We close in an hour')
    }
  }

}
takeArr([30, 10])

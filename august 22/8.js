// 8.js

// Make this work: duplicate([paul,billy,sarah,jane,desmond]); 
// [paul,billy,sarah,jane,desmond,paul,billy,sarah,jane,desmond]

let array1 = ['Paul', 'Billy', 'Sarah', 'Jane', 'Desmond']
let array2 = array1.concat(array1)

console.log(array2)
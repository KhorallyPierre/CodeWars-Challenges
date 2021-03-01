// Wolves have been reintroduced to Great Britain.
//You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.
// Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten.
//Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

function warnTheSheep(queue) {
  if (queue[queue.length -1] === 'wolf'){
    return 'Pls go away and stop eating my sheep';
  } else {
    let index = queue.findIndex( (x) => x == 'wolf');
    return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
  }
}

//
// //1
// function warnTheSheep(queue) {
//  if (queue[queue.length -1] === 'wolf'){
//    return 'Pls go away and stop eating my sheep';
//  } else {
//    let index = queue.findIndex( (x) => x == 'wolf');
//    return `Oi Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
//  }
// }
//
// //2
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'Pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex((x) => x == 'wolf');
//   } return `oi sheep number ${queue.length - index - 1}! Your  aboutto be eaten by a wolf!`;
// }
//
// //3
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex( (x) => x == 'wolf');
//   } return `oi sheep number ${queue.length - index - 1 } black black black!`
// }
//
// //4
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex((x) => x == 'wolf')
//   } return `oi sheep number ${queue.length - index - 1 } black black black!`;
// }
// //5
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return `oi sheep number ${queue.length - index - 1} black black blak!`;
// }
// //6
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return `oi sheep number ${queue.length - index - 1} ha hah hah hahah! `;
// }
// //7
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep';
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return `oi sheep number ${queue.length - index - 1} ha hahah haha haha `;
// }
// //8
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep;'
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return  `oi sheep number ${queue.length - index - 1} hahahahahah`;
// }
//
// //9
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep;'
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return `oi sheep number ${queue.length -index - 1} hahahahahha `;
// }
// //10
// function warnTheSheep(queue) {
//   if (queue[queue.length -1] === 'wolf'){
//     return 'pls go away and stop eating my sheep;'
//   } else {
//     let index = queue.findIndex((x) => == 'wolf')
//   } return `oi sheep number ${queue.length - index - 1 } hha haha hahah`;
// }

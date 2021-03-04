// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array
// of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (let i = 0; i< birds.length; i++){
    for(let j = 0; j< geese.length;j++){
      if(birds[i] == geese[j]){
        birds.splice(i, 1);
        i= i-1;
      }
    }
  }
  return birds;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

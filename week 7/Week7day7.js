// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as
// an argument and returns a filtered array containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:



function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // element represerns element inside birds array
  return birds.filter(element => geese.includes(element) == false)

};

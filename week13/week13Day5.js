// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
//


var mergeTwoLists = function(l1, l2) {
  let newArray = []
  let i = 0
  let j = 0

  while (i < l1.length && j < l2.length) {
    if (l1[i] < l2[j]) {
      newArray.push(l1[i])
      i++
    } else if (l2[j] < l1[i]) {
      newArray.push(l2[j])
      j++
    } else {
      newArray.push(l1[i])
      newArray.push(l2[j])
      i++
      j++
    }
  };
  return newArray
}
console.log(mergeTwoLists([1, 2, 3, 4, 5, 5], [1, 3, 5, 6, 6]))

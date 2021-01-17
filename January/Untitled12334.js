//const _ = require('lodash');
//

let testArr1 =
     [
         {"type": "nickel", "year": 1970},
         {"type": "quarter", "year": 1971},
         {"type": "nickel", "year": 1940},
         {"type": "quarter", "year": 1900},
     ]
let testArr2 =
     [{"type": "quarter", "year": 1971}, {"type": "quarter", "year": 1900}]

function are_quarters_equivalent(coin_list_a, coin_list_b){
 let filteredArray1 = coin_list_a.filter(element => element.type === 'quarter');
 // console.log(filteredArray1)
 let filteredArray2 = coin_list_b.filter(element => element.type === 'quarter');
 // console.log(filteredArray2)
 // console.log([...filteredArray2])

return arrayEquals(filteredArray1, filteredArray2)

}

function arrayEquals(a, b) {
 return Array.isArray(a) &&
   Array.isArray(b) &&
   a.length === b.length &&
   a.every((val, index) => doTheyMatch(val, b[index]));

 }
console.log(are_quarters_equivalent(testArr1, testArr2))

function doTheyMatch(coin1, coin2){
  return(coin1.type === coin2.type && coin1.year === coin2.year)

}

//don








   // # The quarters in these lists are in different orders so they are not equivalent
   // assert not are_quarters_equivalent(
   //     [
   //         {"type": "nickel", "year": 1970},
   //         {"type": "quarter", "year": 1971},
   //         {"type": "nickel", "year": 1940},
   //         {"type": "quarter", "year": 1900},
   //     ],
   //     [{"type": "quarter", "year": 1900}, {"type": "quarter", "year": 1971}],
   // )

//_.times(5, sayHello);

// parameters will be two lists being filtered through
// return true if lists match , return false if they dont present in the same order
// e - two lists below
// p - coin_list_a.filter(element => element.type === 'quarter);
//     coin_list_b.filter(element = element.type === 'quarter);

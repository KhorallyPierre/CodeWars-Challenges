
// 1,2,3,4,5,6,7,8 - input 
// 0,1, 1, 2, 3, 5, 8,  - output


// f(n) = f(n-1) + f(n-2) 
// f(0)= 0
// f(1) = 1

function fib(n) {
    console.log( n)
    if (n === 0) {
        return 0
    } else if ( n === 1 ){
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}
console.log(fib(6))

// def fib(n)
//   if n === 0 
//     return 0 
//    elseif n === 1 
//     return 1
//   else 
//     return fib(n-1) + fib(n-2)
//   end
// end
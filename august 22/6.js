// 6.js

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply(x, y, z){
    let product = x * y * z
    if (product % 3 === 0){
        return  console.log('Zebra')
    } else {
       return 'Lion'
    }
}

 console.log(multiply(30, 2, 1))

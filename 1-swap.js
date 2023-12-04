let a = 5
let b = 10

console.log("The value a is : " + a) // 5
console.log("The value b is : " + b) // 10

let c
c = a
a = b
b = c

console.log("After Swap")

console.log("The value a is : " + a) // 10
console.log("The value b is : " + b) // 5

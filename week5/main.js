//initial x with empty array
const x = [] //typeof array is object
console.log(typeof x)

if (x.length === 0) console.log("empty array")
else console.log("not empty array")
//x[index], add a new 
x[0] = 1
x[1] = 3
x[2] = 5
//add a new element in the end of array by using push function
x.push(7)
x.push(9)
console.log(x)
// [ 1, 3, 5, 7, 9]

const y = [1,true,'Beginner',2.5]
console.log(y)
console.log(y[0])
console.log(y[y.length - 1])
console.log(y.length)
//nested array
const z = [
    [2,4,6]
    [true, false]
    ['a', 'b', 'c']
]

const m = [
    { productId: 1, name: 'pen', price: 200 },
    { productId: 2, name: 'notebook', price: 100},
    { productId: 3, name: 'pencil', price: 100}
]







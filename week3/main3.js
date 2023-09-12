//x is a global scope
//let x = 1
const x = 1
{
    //x is a block scope
   //let x = 2
   const x = 1
   console.log(x)
}

function doIt(y) {
//y is a fuction scope
    console.log(y)
}
console.log(x)//?1
doIt(100)
console.log(x)//?1

let msg = 'hello'
console.log(msg.charAt(0)) //string user zero based index
let msgs = [...msg] //spread operator
console.log(msgs)

let n = '2'
console.log(typeof n)
console.log(typeof Number(n)) // explicit type converstion
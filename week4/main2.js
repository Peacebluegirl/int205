//Random number in a range 1 to 10
//Math.random() randoms in a range 0 to 0.99999*
//const rand = Math.random() * 10 //0 to 9.99999
//console.log(rand)

console.log(Math.round(3.1))
console.log(Math.round(3.4))
console.log(Math.round(3.5))
console.log(Math.round(3.7))
console.log('----')
console.log(Math.floor(3.1))
console.log(Math.floor(3.4))
console.log(Math.floor(3.5))
console.log(Math.floor(3.7))
console.log('----')
console.log(Math.ceil(3.1))
console.log(Math.ceil(3.4))
console.log(Math.ceil(3.5))
console.log(Math.ceil(3.7))
console.log('----')
console.log(Math.PI)
console.log(Math.pow(2,5))
console.log(Math.sqrt(9))

console.log('----')
const rand1 = Math.random() * (100 - 25) + 25
console.log(rand1)

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let n1 = 25,
    n2 = 100

const rand = Math.floor(Math.random() * (n2 - n1 + 1)) + n1
console.log(rand)

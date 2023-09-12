//let x = 1
//let y = x === 1 ? Math.random() * 2 + 3 / 5 : x
//console.log(x === 1 ? 1 : 0)

//let m = null

//optional chaining
//console.log(m.charAt(0))
//console.log(m?.[0])
//console.log(m?.id)

//nullish
//let n = m ?? 0 //equals to m===null && m!===undefined? m : 0
//console.log(n)

let y = []//array initialization with empty array
let z = {}//object initialization with no property
console.log(typeof y)//empty array (not null and not undefined)
console.log(typeof z)//empty object (not null and not undefined)

let a = [1, 3, 5, 7]
a = a ?? y //a=a
console.log(a) //[]
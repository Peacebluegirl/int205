//optional chaining ?.
let a //undefined
//with array
console.log(a?.[0])

//with object
let b = { id: 1, fullname: 'somchai' }
//1. use . before property name
console.log(b?.id)
//2. use ['property name'] in []
console.log(b['id'])
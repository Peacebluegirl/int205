let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'

console.log(str1 === str2) //false 'a' === 'A',
console.log(str1 !== str3) //true 'a' === 'A',
console.log(str2 === str3) //false 'A' === 'A' , 'n' === 'N' ,
console.log(str1 === str4) //true 'a' === 'a' , 'n' === 'n' , 't' === 't'
console.log(str1 < str2) //
console.log(str3 < str1) //

console.log('----')
console.log(str1.includes('nt'))
console.log(str1.includes('Nt'))
console.log(str1.toLocaleLowerCase().includes('Nt'.toLocaleLowerCase()))
console.log(str1.toUpperCase().includes('Nt'.toUpperCase()))
console.log(str1.includes('ant'))

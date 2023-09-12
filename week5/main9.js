//1. create function with function declaration
function concat(str1, str2) {
    return str1 + str2
}

//2. create function with function expression
const toUpper = function (str1) {
    return str1.toUpperCase()
}

const reverse = function rev(str1) {
    return [...str1].reverse().join('')
}

console.log(concat('js', 'beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))
//doSomething is a hig



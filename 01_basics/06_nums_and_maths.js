const score = 400
const balance = new Number(100)

console.log(score)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2))

const big_number = 2192844;
console.log(big_number.toPrecision(5))
console.log(big_number.toLocaleString())

//++++++++++++++++++++++Maths+++++++++++++++++++++++

console.log(Math)
//Creating a program to give an integer between min and max
const min = 10
const max = 100
console.log(min+(Math.floor((Math.random()*(max-min+1)))))

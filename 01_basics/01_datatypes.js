"use strict";

/*
datatypes:-
number
big int
string
null
undefined
symbol

object
*/
//null is an object in javascript
//number
const accountId = 1;
console.log(typeof accountId)
// bigInt
let accountBalance = BigInt(1234567890123456789012345);
console.log(typeof accountBalance)
// String
let accountName = "Priyanshu Pareek"
console.log(typeof accountName)
// null
let accountLocation = null
console.log(typeof accountLocation)//null is of type object
//undefined
let accountInfo
console.log(typeof accountInfo)
//symbol
const accountSymbol = Symbol("Unique symbol")
console.log(typeof accountSymbol) 
//boolean
let accountIsPremium = true
console.log(typeof accountIsPremium)
//Object
console.log(typeof console)
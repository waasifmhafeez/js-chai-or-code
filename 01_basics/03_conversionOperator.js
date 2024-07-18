 //  CONVERSION TO NUMBER

 let score = "33a"

//  console.log(typeof score)
//  console.log(typeof(score))

 let valueNumber = Number(score)  // to convert string number value to actual number value

//  console.log(typeof valueNumber)
//  console.log(valueNumber)


 // "33" => 33 => number
 // "33a" => NaN => NaN's datatype is also number
 // undefined => NaN => number
 // true => 1
 // false => 0
 // "hitesh" => NaN => number
 // null => 0 => number
 
// CONVERSION TO BOOLEAN


 let isLoggedIn = 1

 let booleanIsLoggedIn = Boolean(isLoggedIn)

//  console.log(typeof booleanIsLoggedIn)
//  console.log(booleanIsLoggedIn)

 // 1 => true ; 0 => false
 // "" => false => boolean
 // "hitesh" => true => boolean

 // CONVERSION TO STRING

 let someNumber = 33

 let stringNumber = String(someNumber)

//  console.log(stringNumber)
//  console.log(typeof stringNumber)

 
 //  ********** OPERATORS ***********

 let value = 3
 let negValue = -value

//  console.log(negValue)

//some common operations

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)    //power 
// console.log(2 / 2)
// console.log(2 % 2)

// Concate strings

let str1 = "Hello"
let str2 = " Hitesh"
let str3 = str1 + str2 

// console.log(str3)

// console.log("1" + 2)        //12 => string
// console.log(1 + "2")        //12 => string
// console.log("1" + 2 + 2)    //122 => string
// console.log(1 + 2 + "2")    //32 => string

let a =  "1" + 2 + 2

// console.log(typeof a)
// console.log(a)

// console.log(true)    // true => boolean
// console.log(+ true)    // 1 => number
// console.log(true +)    // error => not expected

// console.log(+ "")    // 0 => number
// console.log(+ "a")    // NaN => number

// NOT PREFERRED WAY

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// console.log(num1)
// console.log(num2)
// console.log(num3)
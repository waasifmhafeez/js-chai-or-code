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

 console.log(stringNumber)
 console.log(typeof stringNumber)
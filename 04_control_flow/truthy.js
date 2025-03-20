const userEmail = "hitesh@ai"
if(userEmail){
    console.log("got user's email")
}else{
    console.log("dont have users email")
}

// Truthy & Falsy Values

// Falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
// "0" , 'false', " ", [] , { } , function(){}

// to check if array is empty or not

const userArray = []
if(userArray.length === 0){
    console.log("Array is Empty..")
}

// to check if a Object is empty


const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// for info
// false == 0      // => true
// false == ""     // => true
// 0 == ""         // => true 

// Nullish Coalescing Operators (??): null undefined

// some times when you make api calls to os mein possible hy kay ap k pas response ay hi na ya undefined a jai. to os kay liye hum ye use krte hein.. 
// to ye kahe ga kay agr first null ya undefined ni h to first value assign kr do ni to second krdo 

let val1;
let val2;
val1 = 5 ?? 10;
console.log(val1)       // here first value is not null or undefined so it assigned first one to "val1" = 5

val2 = null ?? 15;
// val2 = undefined ?? 15;
console.log(val2)       // here first value is undefined so it will assign seconf value to "val2" = 15

let val3;
val3 = null ?? 5 ?? 15;     // so it has multiple values, then it will assign first value it found which is not null  or undefined
console.log(val3) 

// Ternary Operator

// condition ? true : false;   // syntax

const iceTeaPrice = 200;
iceTeaPrice >= 300 ? console.log("price is expensive") : console.log("you can buy one its cheap")

// comment for new commit
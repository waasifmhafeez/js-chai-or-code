// scope is {}
// block scope {}

// VAR
var c = 300
{
let a = 10
const b = 20
var c = 30
}
// c=20        // if you declare a variable without any keyword it'll be "var"

// console.log(a);  //undefined
// console.log(b);  //undefined
// console.log(c);   // if you use "c" out of the scope you can still access it, but you cant acccess the "a" and "b", they will be undefined

// LET
let aLet = 300
{
    let aLet = 400  // inside block "aLet" will be 400 and outside block it'll be 300
    console.log("Inner =>",aLet);
}
console.log(aLet);


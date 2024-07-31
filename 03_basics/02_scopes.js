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
    // console.log("Inner =>",aLet);
}
// console.log(aLet);

function one (){
    const username = "Hitesh";
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);   // "webiste" scope is inside function two, it cant be accessed outside of it
    two();
}
one();      // ap is ko ayse yaad rukh sukte hein, kay chhotay bachhay baraon sy icecream mang sukte hein, but baray chhoton sy ni mang sukte

// another example with the help of if-else
if(true){
    const username = "hitesh chaudary"
    if(username === "hitesh chaudary"){
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website);    // error: website cant be accessed outside of scope
}
// console.log(username);      // error: username cant be accessed outside of its scope

// ******** Interesting ***********

console.log(addOne(5))          // here if we call function before definition then there is no problem
function addOne (num){
    return num + 1;
}
addTwo(6)                         // if we call this function that we have assigned to const. there will be error : cant accedd "addTwo" before initialization
const addTwo = function (num) {
    return num + 2;
}
// addTwo(6)

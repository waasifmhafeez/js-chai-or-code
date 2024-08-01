const user = {
    username: "hitesh",
    price: 939,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website.`);   // "this" refers to the current context 
        // console.log(this);      // here you can see its referring to current scope
    }
}

// to run "welcomemessage()" function
// user.welcomeMessage();
user.username = "Sam";
// user.welcomeMessage();

// console.log(this);  // it will return empty object {}.. in node this without any scope will refer to "global object".. in browser this without any scope will refer to "window object"

// function chai1() {
//     let username = "chai or code"
//     // console.log(this.username);     // here you cant access the this.username, it will return undefined-- this wil work only inside a scope
//     // console.log(this);
// }
// chai1()

// it will work same if you use different syntax to create function

// const chai2 =  function() {
//     let username = "chai or code"
//     console.log(this.username);     // here you cant access the this.username, it will return undefined-- this wil work only inside a scope
//     // console.log(this);
// }
// chai2()

// another syntax of arrow function

// const chai3 = () => {
//     let username = "hitesh"
//     console.log(this.username);  // it will return undefined-- this will not work is any of function syntax
// }
// chai3()

//  ARROW FUNCTIONS DIFFERENT SYNTAX

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5));

// ARROW FUNCTION WITH IMPLICITE RETURN

const addTwo2 = (num1, num2) => num1 + num2;    // implicite return means ke compiler bole ga mein man leta ho kay ap ny return likh diya
console.log(addTwo2(3,5));

// agr curly brackets {} mein likha to "return" keyword use kr na ho ga

const addTwo3 = (num1, num2) => (num1 + num2)
console.log(addTwo2(3,5));

//explicitly return is when we use "return"
// implicitly return is when we dont use "return"

//suppose if we have to return object through implicity return

// const addTwo3 = (num1, num2) => {username: "hitesh"}     // but its wrong syntax
const arrowReturnObj = (num1, num2) => ({username: "Hitesh"});      // this is right syntax
console.log(arrowReturnObj(3,4));
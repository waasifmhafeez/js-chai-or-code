// if you want want to do task of five times printing your multiple times

// console.log("Htesh chaudary")
// console.log("Htesh chaudary")
// console.log("Htesh chaudary")
// console.log("Htesh chaudary")
// console.log("Htesh chaudary")

// you can do this with the help of a function easily

function printMyName() {
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")   
    console.log("h")   
}

// now just you need to call the function as many times you want

// printMyName;    // its reference to the function
// printMyName();  // its calling the function

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNumbers(2,4);         // it'll work fine in this case 
// addTwoNumbers(2, "4");      // now it'll gonna concate 2 with "4" => 24 or if you give 3,"a" => 3a
// addTwoNumbers(2,null);

// you can also assign functions to other variables

// const result = addTwoNumbers(3,2);  // but your function isnt returning any thing
// console.log(result);        // it'll show undefined bcs function is not returning anything

function addTwoNums(num1, num2){        // at function definition we have parameters
    // const result = num1 + num2;     // there are two ways (1) we can assign sum to a new variable and then return that
    // retrun result;
                                       // OR
    return num1 + num2;                // (2) directly return the result 
}

const sum = addTwoNums(3,2);    // now our function is returning result || at function call we have arguments
// console.log(sum);

// function loginUserMessage(username){
//     return `${username} just logged in..`
// }
// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());    // in case if you dont provide any parameters then it be undefined result=> undefined just logged in..

// If user didnt provide argument then here we handled it..we showed a msg instead of showing undefined

function loginUserMsg(username = 'sam'){   // agr hum chahte hein, kay username ki value kabhi undefined na ho. to PREDEFINED parameters bhi rakh sukhte hein
    if(username === undefined){                     // you can also change condition to (!username)-- if username == undefined it will be as false- so ! false == true
        console.log('please enter a username.');
        return  ;
    }
    return `${username} is logged in`
}
const msg = loginUserMsg()
// console.log(msg);

// REST multiple parameter
// agr humara function ak hi parameter accept kr raha hy magr user multiple parameter dedeta h. to os kay liye hum REST PARAMETERS ka use karein gy

// function calculateCartPrice(num){    // in case of one single parameter it will work fine
// function calculateCartPrice(...num){       // but if use give multiple params we can Rest then, rest operater put all the params into an array result=>[4,3,2,1]
function calculateCartPrice(val1, val2, ...num){    // here it will assign 1st param to val1, 2nd param to val2, and remaing all will put in num array
    return `val1 => ${val1}, val2 => ${val2} and all remaining num array => ${num} `
}
// console.log(calculateCartPrice(4,3,2,1,0))

// passing Objects as arguments to a function

const user = {
    username: "Hitesh",
    price: 999,
}
function handleObject (userObject) {
    console.log(`Username is ${userObject.username} and price is ${userObject.price}`)
}
// handleObject(user);
// we can also provide object directly as argument at function call

// handleObject({username: "Hitesh Chaudary",price:199})
 
// now passing array as Argument to Functions

const newArr = [200, 300, 450, 530];
function return2ndValue(getArray){
    return getArray[1];
}
// console.log(return2ndValue(newArr));
// or you can pass directly the array as arguments
console.log(return2ndValue([200,450,300,600]));
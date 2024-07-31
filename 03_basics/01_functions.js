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

printMyName;    // its reference to the function
printMyName();  // its calling the function

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNumbers(2,4);         // it'll work fine in this case 
// addTwoNumbers(2, "4");      // now it'll gonna concate 2 with "4" => 24 or if you give 3,"a" => 3a
// addTwoNumbers(2,null);

// you can also assign functions to other variables

const result = addTwoNumbers(3,2);  // but your function isnt returning any thing
console.log(result);        // it'll show undefined bcs function is not returning anything

function addTwoNums(num1, num2){        // at function definition we have parameters
    // const result = num1 + num2;     // there are two ways (1) we can assign sum to a new variable and then return that
    // retrun result;
                                       // OR
    return num1 + num2;                // (2) directly return the result 
}

const sum = addTwoNums(3,2);    // now our function is returning result || at function call we have arguments
// console.log(sum);

function loginUserMessage(username){
    return `${username} just logged in..`
}

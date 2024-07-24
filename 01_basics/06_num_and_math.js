const score = 400;     //its a variable of type number
// console.log(score);

const balance = new Number(100);      // its object of number class of type obj
// console.log(balance);

// console.log(balance.toString().length);     //you convert it to string and use string operations

// console.log(balance.toFixed(2));      // toFixed is used to tell how many digits you want after point, in this case 100.00

const hundreds = 1000000;

console.log(hundreds.toLocaleString());     // by default it will according US standards like hunded thousands millian etc
// to get it in our indian standard
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);   // these are max and min integer that you can store in a number

// ********* MATHS *************

 console.log(Math);     // run this in console to get all available Math methods

 console.log(Math.abs(-4));     // abs means absolute value it'll convert ve value to absolute means (+ve) value

 console.log(Math.round(4.4));      // it'll round of the given value, floating value is 5 or greater it'll round off forward else backward

// Arrays

const myArr = [1,2,3,4]
const heros = ['superman','spiderman', 'batman'];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[3]);

// Array Methodes

// myArr.push(5)   // adds element to the end
// myArr.push(6)
// myArr.pop()     // removes element from the end

// myArr.unshift(0)    // adds element to the start
// myArr.shift()       // removes element from the start

console.log(myArr);

// console.log(myArr.includes(3));     // returns true or false if given value is present

// console.log(myArr.indexOf(3))       // returns index of given value if value is present in array otherwise retutns -1 if not found

// console.log(myArr.indexOf(9))

const newArr = myArr.join(" ");     // put elements of an array to a string seperated by whatever value is in parameter, in our case space " "
console.log(newArr);
console.log(typeof newArr);

// slice & splice
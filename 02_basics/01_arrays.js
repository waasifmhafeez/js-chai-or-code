// Arrays

const myArr = [1,2,3,4,5,6]
const heros = ['superman','spiderman', 'batman'];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[3]);

// Array Methodes

// myArr.push(5)   // adds element to the end
// myArr.push(6)
// myArr.pop()     // removes element from the end

myArr.unshift(0)    // adds element to the start
// myArr.shift()       // removes element from the start

// console.log(myArr);

// console.log(myArr.includes(3));     // returns true or false if given value is present

// console.log(myArr.indexOf(3))       // returns index of given value if value is present in array otherwise retutns -1 if not found

// console.log(myArr.indexOf(9))

const newArr = myArr.join(" ");     // put elements of an array to a string seperated by whatever value is in parameter, in our case space " "
// console.log(newArr);
// console.log(typeof newArr);

// slice & splice

console.log("A => ",myArr);

const myn1 = myArr.slice(1,3);  // doesnt manipulates the orignal array, just takes selected items from orignal array and retrns them into a new array

console.log(myn1);
console.log("B => ",myArr);

const myn2 = myArr.splice(1,3);     // manipulates the orignal array and returns the selected items into a new one 

console.log(myn2);
console.log("C =>",myArr);
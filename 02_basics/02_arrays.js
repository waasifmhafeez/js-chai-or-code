// Arrays 02

const marvel_heros = ["spiderman","ironman","vision"];
const dc_heros = ["superman","batman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // it push the whole array into marvel_heros. output: [ 'spiderman', 'ironman', 'vision', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_heros[3][1]);    // to access elements of array at index 3 

const newArr = marvel_heros.concat(dc_heros);   // combines two or more array and return a new one. does'nt effect the orignal one
// console.log(newArr);
// console.log(marvel_heros);

// but we use spread to more commonly to put element of an inside another

const new_heros = [...marvel_heros,...dc_heros];
// console.log(new_heros); 

const anotherArr = [1,4,3,[3,4,1],4,5,[5,3,[4,3]]];

const flatArr = anotherArr.flat(1)   // Returns a new array with all sub-array elements concatenated into it, you can also pass the depth till you want element to be flat like 1,2,or infinty
const flatArr2 = anotherArr.flat(Infinity)

// console.log(flatArr)
// console.log(flatArr2)

console.log(Array.isArray("hitesh"));   // tells if prameter is array or not returns true or false. result: false
console.log(Array.from("Hitesh"));      // creates array from value provide is prameter. reslt: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"}));  // it return empty array [] whenever its not able to convert -- interesting--

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // Returns a new array from a set of elements. result : [ 100, 200, 300 ]

// we can merge multiple arrays using concat as well like spread syntax..

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log("concatinated => ",concatAll)

// Key Takeaways

// 1. push() method in array simply add the array as an new single entity in the existing array.
// 2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// 3. Despite push and concat we should use spread operator.
// 4. Intresting methods, isArray(), from() and of()
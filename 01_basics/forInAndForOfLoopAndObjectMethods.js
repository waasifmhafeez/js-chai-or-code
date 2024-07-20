
// let list = [4, 5, 6];

// for (let i in list) {
//    console.log(i); // "0", "1", "2",
// }

// for (let i of list) {
   // console.log(i); // "4", "5", "6"
// }



// let list = ["a", "b", "c"];
// // for in
// for (let i in list) {
// 	// i is index
// 	console.log(i);   // "0", "1", "2",
// 	console.log(list[i]);   // "a", "b", "c"
// }
// // for of
// for (let i of list) {
// 	// i is value
// 	console.log(i);   // "a", "b", "c"
// }


// object to loop through
// let obj = { first: "John", last: "Doe" };

// loop through object and log each key and value pair
//ECMAScript 5
// Object.keys(obj).forEach(function(key) {
    // console.log(key, obj[key]);
// });

//ECMAScript 6
// for (const key of Object.keys(obj)) {
//     console.log(key, obj[key]);
// }

//ECMAScript 8
// Object.entries(obj).forEach(
//     ([key, value]) => console.log(key, value)
// );

// OUTPUT
/*
   first John
   last Doe
*/
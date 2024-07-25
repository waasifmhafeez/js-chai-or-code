// Date : Date is an object in javascript. 

// JavaScript stores dates as number of milliseconds since January 01, 1970

// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT

// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,14); 
let myCreatedDate = new Date(2023,0,14, 5, 3);        //months will start from zero, that mean zero represents Jan
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// to give date in specific format like mm-dd-yy or yyyy-mm-dd etc

let formatDate = new Date("2023-01-14");
// let formatDate = new Date("02-15-2023");
// console.log(formatDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);       // it provides the milliseconds since 1st jan 1970
// console.log(formatDate.getTime());      //get milliseconds of since 1st jan 1970 to till provided date
// console.log(Math.floor(Date.now() / 1000));    // it provides the milli seconds to convert them into secons divide them by 1000. and to remove value after decimal use Mth.floor() or math.round()

//  to get specific thing from date object
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(typeof newDate)

// to customise the Date object

let anotherDate = newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(anotherDate);
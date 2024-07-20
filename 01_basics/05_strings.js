const name = "hitesh";
const repoCount = 50;

// ******** String Concatination ********

console.log(name + repoCount + " Value" );

// ******** String Interpolation *********

console.log(`hello my name is ${name} and my repo count is: ${repoCount}`);

// String declaration with Sting class : String()

const gameName = new String('hitesh-hc');

// in above gameName will be string of type object, it will have every character as key value pair like 0: h ,1: i

// console.log(gameName[0]);
// console.log(typeof gameName);

// you also access its properties like objects

// to access prototype of string class

// console.log(gameName.__proto__ );

// to access methods of object, remember these methods does not effect the orignal element

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));        // it will provide you which character is at index 2 wich "t"

// console.log(gameName.indexof('t'));     // it will provide you the index of first accurance of the giving character, here its 2


const subString = gameName.substring(0,4);      // it will create a subString out of the orignal string. from index 0 to before index 4. 4 will not be included output: hite
// you cant use -ve value in substring method as parameter
// console.log(subString);

const anotherStr = gameName.slice(-8,4)     

// slice will give another from previous one, first index is start index, you can also put -ve value, incase of -ve it start counting from last index as -1 and all the back, in our case -8 
// second index is end index, but it will not be included, it will give you character before 4. you can also use -ve values slice(1,-4) => slice(1, gameName.length -1) => slice(1,5)

// console.log(anotherStr);

const strOne = "   hitesh   ";
console.log(strOne.trim());     // trim method trims the stating and ending spaces, which we dont want to store in out DBs 

const url = "https://hitesh.com/hitesh%20choudary";  // sometime when url have some spaces like "https://wasif hafeez" browser will automatically change it to "https://wasif%20hafeez" so we dont want it to tackle it we will use replace method

console.log(url.replace("%20",'-'));    // here first argument is what you wanna replace and second is with what you wanna replace, we replace %20 with -

console.log(url.includes("hitesh"));  // include will tell if particular string or letter is present in our string, it will return true or false

const strTwo = "hitesh-good-teacher";   //if you want to split this string into array, where ever "-" split output:['hitesh','good',teacher']

console.log(strTwo.split("-"))

  


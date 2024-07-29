// there are two ways to declare a object (1) as a literal (2) as a constructor

// Singleton - means when ever you create a instance through a constructor a singleton object will be created. it means its one of a kind

// a design pattern that ensures that only one instance of a class can exist in the entire program


// Object.create        // is ko kaha jata h contructor method kay through- is sy jo object bany ga wohi singleton hoga

// ******* bject literals ********

// in case of array you have only way to access elements. myArr[2] you dont have any other way

const JsUser = {
    name: "Hitesh",
    "fullName": "Hitesh Chaudary",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// ways to object's properties

// console.log(JsUser.email)
// console.log(JsUser["email"])     // when you are accessing through brackets then give key name as string
// console.log(JsUser["fullName"])

// TO ADD SYMBOL IN OBJECT

const mySymbol = Symbol("hello");   // to add symbol into a object, first you have to declare it
// console.log(mySymbol);
// console.log(`the type of mySymbol is => ${typeof mySymbol} `);

const mySym2 = Symbol('hi')

const obj2 = {
    name: "wasif",
    [mySymbol]: "hey",      // you can only add symbol in square brackets []
    mySym2: "hehe"          // if use Symbol like this, then it will not be treated as symbol, it'll be a string
}

// console.log(obj2[mySymbol]);
// console.log(obj2);              // even in object mySymbol is represented as symbol

// console.log(`the type of mySym2 is => ${typeof obj2.mySym2} and value is => ${obj2.mySym2}`);

// if you want to lock a object, so no one chanege it. use Object.freeze()

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)       // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

JsUser.email = "hitesh@microsoft.com";  // tried to modify email
// console.log(JsUser);    // email didnt change bcs of Object.freeze()

// Now lets add Functions to object - so JS functions are treated as typeone citizen, means there will be no discremination, you can also treat functions as variables

JsUser.greeting = function(){
    console.log('greetings from chai or code');
}

JsUser.greeting2 = function() {
    console.log(`hello from greet 2 and ${this.name}`);
}

console.log(JsUser.greeting);   // if you write function name it will return you code of function or reference

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

// INFO : in greeting & greetingTwo functions you  log messages to the console but don't return anything, so they implicitly return undefined as an output after every console. But when we use return keyword in functions instead of console.log it will not output 'undefined'.

// sir the undefined value that is being printed on the screen is bcoz u r printing the return of the function which is not defined 
// console.log(JsUser.greeting()) is wrong instead use JsUser.greeting() for calling the function
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
console.log(mySymbol);
console.log(`the type of mySymbol is => ${typeof mySymbol} `);

const mySym2 = Symbol('hi')

const obj2 = {
    name: "wasif",
    [mySymbol]: "hey",      // you can only add symbol in square brackets []
    mySym2: "hehe"          // if use Symbol like this, then it will not be treated as symbol, it'll be a string
}

console.log(obj2[mySymbol]);
console.log(obj2);              // even in object mySymbol is represented as symbol

console.log(`the type of mySym2 is => ${typeof obj2.mySym2} and value is => ${obj2.mySym2}`);
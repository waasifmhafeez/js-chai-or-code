// Singleton - objects created with the help of constructors

// Ways to declare objects

// const singletonObject = new Object();   // its a singleton object bcs its created with constructor method
// const normalObject = {}                 // its a normal object, else there is no difference between them

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "chaudary"
        }
    }
} 
// console.log(regularUser.fullname.userfullname.firstname);
// optional chaining is used when data is coming rom api. so some times some of the attributes might be undefined to tackle this use ?
// console.log(regularUser?.fullname?.userfullname?.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// to merge multiple objects into one

const newObj = Object.assign({}, obj1, obj2, obj3)    //assign(target: object, ...sources: any[]) -- Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

console.log(newObj);
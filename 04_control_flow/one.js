// if
const isUserLoggedIn = true;
const temperature = 41;
if(isUserLoggedIn){
    if(temperature < 50){
        // console.log("Temp is less then 50..");
    }
    else{
        // console.log("temp is greater than 50");
    }
}
2<=2
// < , > , <= , >= , == < != , ===    CONPARISION OPERATORS

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000;

// implicite scope
// if(balance > 500) console.log("hello"),console.log(`name is `);   //you can write multiple line code in conditionals..but its not a good practice avoid it

// Nesting

if(balance < 500){
    console.log('balance is less then 500');
}else if(balance < 300){
    console.log('balance is less then 300');
}else{
    console.log('balance is greater then 500');
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = ture
const loggedInFromMail = false

if(userloggedIn && debitCard && 2==2){      //  && will check both conditions means both condition needs to be true
    console.log("Allow to buy courses")
}
if(loggedInFromGoogle || loggedInFromMail){ // if one of the condition is true it will work
    console.log("loggedIn.. ");
    
}
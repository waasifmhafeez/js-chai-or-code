const accountId = 14425
let accountEmail = "wasif@google.com"
var accountPassword = "12345"
accountCity = 'jaipur'
let accountState 

// accountId = 1212

accountEmail = "wf@google.com"
accountPassword = "12345"
accountCity = "Bangluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(typeof accountCity)

// prefer not to use var, bcs of issue in BLOCK scope and Functional Scope
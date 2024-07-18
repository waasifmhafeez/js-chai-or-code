// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)        // here strinf "2" will be first converted to a number then it will compare
// console.log("02" > 1)


// console.log(null > 0);      // result: false 
// console.log(null == 0);     // result: false
// console.log(null >= 0);     // result: true

//   REASON : the reason is that equality check == and comparisons operator > >= < <= works differently
//            Comparisions convert null to a number,  treating it as zero. Thats why (3) null >= 0 is true
//            and (1) null > 0 is false 

// ===

// console.log("2" == 2);      // result: true => bcz yaha pr conversion hona shuru ho jai ga
// console.log("2" === 2);     // result: false => yaha conversion ni hoga, strictly check hoga, or dataType bhi check hogi

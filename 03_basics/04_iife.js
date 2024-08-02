// Immediately invoked Function Expression (IIFE)

// kabhi kabhi hum ak file hum likhte hein jis mein sirf database connections hote hein, or hum chahte hein kay jese hi application start ho, wese hi os file kay andar hamara database ka connection start ho jai

// kai bar humaray global scope mein kuch variables declare hote hein, or agr hum apna koi function banate hein, or hum ni chahte kay humaray os function mein wo global variables koi problem karein, bcz bachay to baron sy icecream mang sukte hein, to function kay liye wo global variables to available hein. to kafi bar aysa hota h kay hamaray function kay andar kay variables global scope sy polute ho jate hein..to is ko avoid krny kay liaye bhi IIFE use hota h...hum apna alag sy ak scope bna lete hein kyu kay function mein to scope bun jata h...or hum chate hein kay immediately run ho jai

// Normal function

// function chai(){
//     console.log(`DB CONNECTED..`);
// }
// chai()

// IIFE

(function chai(){       // named IIFE
    console.log(`DB Connected.`);
    
})();
// agr ap ko kabhi error aye, or ap two IIFE ak kay bad doosra use kr rahy hon to, is ka matlub h, compiler ko smgh ni araha hy kay context kaha pr end krna hy, to is error ko khatam krny k liye first wale IIFE kay bad seli-colon ; laga dein 

// first bracket () is for function and second is for function call ()

((name)=> {     // unnamed IIFE, parameterized IIFE
    console.log(`DB Connected two ${name}`);    // you can also pass params args to IIFE as we do with normal functions
    
})('hitesh')
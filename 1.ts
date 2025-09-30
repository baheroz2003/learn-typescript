//it support static checking
//analyze the code as we type
// console.log('hello')
// const user={name:"hitesh",age:10}
// console.log("hitesh")
//types in js includes are number,string,boolean,null,undefined,void,object,array,tuples,any,never,unknown
// let greetings: string = "hello bro";
// greetings = greetings.toUpperCase();  // Store the result
// console.log(greetings);  // HELLO BRO
// let greetings: string = "hello bro";
// console.log(greetings.toUpperCase());  // HELLO BRO
// console.log(greetings);  // hello bro (original unchanged)
// let userId : number
// userId=334
//do like that which is given below 
// let num: number = 2333.4567;
// // No decimals (default)
// let num1: number = Number(num.toFixed());
// console.log(num1);  // 2333
// 2 decimal places
// let num2: number = Number(num.toFixed(2));
// console.log(num2);  // 2333.46 (rounded)
// // 1 decimal place
// let num3: number = Number(num.toFixed(1));
// console.log(num3);  // 2333.5 (rounded)
// let isLoggedIn: boolean=false
//type inference:TypeScript automatically type detect kar leta hai, explicitly batane ki zaroorat nahi!
//any 
// let value: any = 10;
// value = "hello";      // ✅ OK
// console.log(value);
// value = true;
// console.log(value);         // ✅ OK
// value = [1, 2, 3]; 
// console.log(value);   // ✅ OK
// value = { name: "John" };  // ✅ OK
// // Kuch bhi kar sakte ho - no error!
// value.toUpperCase();
// // value.xyz.abc.def;    // No error (runtime pe crash hoga)
// let hero;
// function getHero(){
//     return "thor"
// }
// hero=getHero()
// let hero: string;
// function getHero(){
//     return "thor"
// }
// hero=getHero()
// let a: any = "hello";
// // Kuch bhi karo - koi error nahi!
// a.toUpperCase();     // ✅ Chalega
// a.toFixed(2);        // ❌ Runtime pe crash, par TypeScript chup rahega
// a.xyz.abc.def();     // ❌ Runtime pe crash, par TypeScript kuch nahi bolega
// let b: unknown = "hello";
// Direct use nahi kar sakte
// b.toUpperCase();     // ❌ TypeScript error dega
// // Pehle check karo type
// if (typeof b === "string") {
//   b.toUpperCase();   // ✅ Ab chalega
// }
// Sirf tab use karo:
// 1. Quick testing
// 2. JavaScript se TypeScript shift kar rahe ho
// 3. Koi aur rasta nahi (bahut rare!)
//// Tab use karo jab:
// 1. API response (pata nahi kya aayega)
// 2. User input
// 3. Third-party library
// 4. File parse kar rahe ho
//// Hamesha prefer karo:
// interface User { name: string }
// let user: User = { name: "John" };





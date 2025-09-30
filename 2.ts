// ❌ GALAT - any use mat karo! String + number = "52" ban jayega
function adds1(num: any){
    num+=2
    console.log(num)  // Output: "52" (string concatenation)
}
adds1("5")

// ❌ GALAT - Type nahi diya! TypeScript error dega
// Parameter 'num' implicitly has an 'any' type
function adds2(num: any){  // num ka type batao!
    num+=2
    console.log(num)
}
adds2("5")

// ❌ GALAT - Type nahi diya! 
function adds3(num : any){  // num ka type batao!
    num+=2
    console.log(num)
}
adds3(5)

// ⚠️ THIK HAI par unnecessary complex
// toFixed() already number return nahi karta, string return karta hai
function addTwo(num : number){
    let numn :number=Number(num.toFixed())  // Unnecessary conversion
    numn+=5
    console.log(numn)  // Output: 10
}
addTwo(5.2)

// ⚠️ THIK HAI par return type nahi bataya
function getUpper(val:string){
    return val.toUpperCase()  // Return kar rahe ho par type nahi bataya
}
getUpper("be")
function signupuser(name:string,email:string,isPaid:boolean){
}
signupuser("hitesh","hitesh@lco.dev",false)
//method 1:
let loginuser = (name: string, email: string): void => {
    console.log(`User logged in: ${name}, ${email}`);
}

loginuser("Ali", "ali@example.com");
// Output: User logged in: Ali, ali@example.com
//method 2:
// Arrow function jo object return karta hai
// let loginuser = (name: string, email: string): object => {
//     return {
//         name: name,
//         email: email,
//         loggedIn: true
//     };
// }
// let user = loginuser("Ali", "ali@example.com");
// console.log(user);
// // Output: { name: 'Ali', email: 'ali@example.com', loggedIn: true }
// User ka proper type define karo
interface User {
    name: string;
    email: string;
    loggedIn: boolean;
}

// Arrow function jo User object return karta hai
// let loginuser = (name: string, email: string): User => {
//     return {
//         name,      // Shorthand for name: name
//         email,     // Shorthand for email: email
//         loggedIn: true
//     };
// }

// let user = loginuser("Ali", "ali@example.com");
// console.log(user.name);  // Ali
// console.log(user.email); // ali@example.com
//method 3
// User ka proper type define karo
// interface User {
//     name: string;
//     email: string;
//     loggedIn: boolean;
// }
// Arrow function jo User object return karta hai
// let loginuser = (name: string, email: string): User => {
//     return {
//         name,      // Shorthand for name: name
//         email,     // Shorthand for email: email
//         loggedIn: true
//     };
// }

// let user = loginuser("Ali", "ali@example.com");
// console.log(user.name);  // Ali
// console.log(user.email); // ali@example.
// com
//type-4
//// Async arrow function - API call ke liye
// let loginuser = async (name: string, email: string): Promise<boolean> => {
//     try {
//         // API call simulation
//         console.log(`Logging in: ${name}, ${email}`);
//         // const response = await fetch('/api/login', {...})
//         return true;  // Login successful
//     } catch (error) {
//         console.error("Login failed:", error);
//         return false;
//     }
// }

// // Use karte waqt await karo
// let success = await loginuser("Ali", "ali@example.com");
// console.log(success);  // true
//Hamesha parameter types batao ✅
// Return type batao ✅
// void use karo agar kuch return nahi ✅
// Interface use karo complex objects ke liye ✅

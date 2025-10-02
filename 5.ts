// // 1️⃣ Define a custom type named "User"
// type User = {
//     name: string;       // name property must be a string
//     email: string;      // email property must be a string
//     isActive: boolean;  // isActive property must be a boolean (true/false)
// }

// // 2️⃣ Create a type alias for string
// type Mystring = string; 
// // Now instead of using "string" directly, you can use "Mystring" for readability

// // 3️⃣ Function that accepts a User object and returns a User object
// function createUser(user: User): User {
//     // Currently this function ignores the input "user"
//     // and returns a new User object with default values
//     return {
//         name: "",        // default empty string for name
//         email: "",       // default empty string for email
//         isActive: true   // default true for isActive
//     }
// }

// // 4️⃣ Call the function with a User object
// createUser({
//     name: "",           // name as empty string
//     email: "",          // email as empty string
//     isActive: true      // isActive as true
// })
// // The function will return a new User object (with same default values)
// type MyString = string;   // string ko alias diya
// type MyNumber = number;   // number ko alias diya

// let name1: MyString = "Baheroz";
// let age: MyNumber = 22;
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// };

// let user1: User = {
//     name: "Baheroz",
//     email: "baheroz@example.com",
//     isActive: true
// };
// type AddFn = (a: number, b: number) => number;

// const add: AddFn = (x, y) => x + y;

// console.log(add(5, 10)); // 15
// type Status = "success" | "error" | "pending";

// let s1: Status = "success";
// let s2: Status = "error";
// // let s3: Status = "other"; // ❌ Error: "other" not allowed
// type Address = {
//     city: string;
//     country: string;
// };

// type Customer = {
//     name: string;
//     address: Address;
//     isPremium: boolean;
// };

// let c1: Customer = {
//     name: "Baheroz",
//     address: { city: "Delhi", country: "India" },
//     isPremium: true
// };

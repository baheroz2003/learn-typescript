// //readonly
// type User = {
//     readonly id: number;   // id ko change nahi kar sakte
//     name: string;
// };
// let user: User = { id: 1, name: "Baheroz" };
// user.name = "Zeya";   // ✅ allowed
// // user.id = 2;       // ❌ Error: Cannot assign to 'id' because it is a read-only property
// //optional 
// type User = {
//     id: number;
//     name: string;
//     email?: string;  // optional
// };
// let user1: User = { id: 1, name: "Baheroz" };  // ✅ email nahi diya
// let user2: User = { id: 2, name: "Zeya", email: "zeya@example.com" }; // ✅ email diya
//concept 
// type CardNumber = {
//     cardNumber: string;
// }

// type CardDate = {
//     cardDate: string;
// }

// // Intersection Type
// type CardDetails = CardNumber & CardDate & {
//     cvv: number;
// }
// // CardNumber & CardDate → dono types ko merge kar diya.

// // & ka matlab hai: intersection → final type me dono ke properties honge.

// // Fir { cvv: number } bhi add kar diya.

// // Iska matlab CardDetails me 3 properties hain:
// {
//     cardNumber: string;
//     cardDate: string;
//     cvv: number;
// }
// const myCard: CardDetails = {
//     cardNumber: "1234 5678 9012 3456",
//     cardDate: "12/25",
//     cvv: 123
// };
// & → intersection → all types combined, sab properties chahiye.

// | → union → either one type, kisi ek property ka object chal jaata hai.

// type A = { a: number };
// type B = { b: string };

// type C = A & B; // { a: number, b: string }
// type D = A | B; // { a: number } OR { b: string }
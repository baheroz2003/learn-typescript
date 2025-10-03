// // In TypeScript, type and interface are both used to define the shape of data (objects, functions, etc.), but they have some key differences.
// // Interface
// interface User {
//   id: number;
//   name: string;
// }
// // Type alias
// type UserType = {
//   id: number;
//   name: string;
// };
// // Interface: Can be extended multiple times.
// interface Person {
//   name: string;
// }
// interface Employee extends Person {
//   salary: number;
// }
// // Type: Uses intersection (&) instead of extends.
// // type Person = {
// //   name: string;
// // }
// // type Employee = Person & {
// //   salary: number;
// // }
// //Interface can be reopened and merged automatically.
// //interface User {
// //   id: number;
// // }
// // interface User {
// //   name: string;
// // }
// // // Final User = { id: number; name: string }
// //type User = { id: number };
// // ❌ Error if you try to redefine `User`
// // type User = { name: string }; 
// //Both can define function signatures:
// // interface Add {
// //   (a: number, b: number): number;
// // }
// // type AddType = (a: number, b: number) => number;
// //type Point = [number, number];
// // type Status = "success" | "error" | "loading";
// //Interfaces cannot directly represent unions or tuples.
// //Both can be used with implements:
// // interface IUser {
// //   id: number;
// // }
// // class User implements IUser {
// //   id = 1;
// // }
// // type IUser = {
// //   id: number;
// // }
// // class User implements IUser {
// //   id = 1;
// // }
// //Interfaces: Preferred for defining object shapes and working with classes. They support declaration merging and extendability.
// // Types: More flexible (unions, intersections, primitives, tuples, etc.).









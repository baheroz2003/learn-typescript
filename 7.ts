//union in ts
let x: string | number;
x = "Hello";  // ✅ ok
x = 42;       // ✅ ok
// x = true;  // ❌ Error: boolean not allowed
function printId(id: number | string) {
    console.log("ID is: " + id);
}
printId(101);       // ✅ number
printId("A123");    // ✅ string
// printId(true);   // ❌ boolean not allowed
type User = { name: string };
type Admin = { name: string; role: string };
let person: User | Admin;
person = { name: "Baheroz" };                 // ✅ User
person = { name: "Baheroz", role: "admin" }; // ✅ Admin
let arr: (number | string)[] = [1, "hello", 2, "world"];

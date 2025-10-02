// ----------------------------
// 1️⃣ Regular Array with Union Types
// ----------------------------
const user: (string | number)[] = [1, "hc"];
user.push("hello"); // ✅ allowed
user.push(42);      // ✅ allowed
// user.push(true); // ❌ Error: boolean not allowed

// ----------------------------
// 2️⃣ Tuple (fixed-length, fixed types)
// ----------------------------
let tuser: [string, number, boolean];
tuser = ["hc", 131, true];
// tuser[0] = 123; // ❌ Error: must be string
// tuser[3] = false; // ❌ Error: index out of bounds

// ----------------------------
// 3️⃣ RGB Tuple Example
// ----------------------------
let rgb: [number, number, number] = [255, 123, 456];
// rgb[0] = "red"; // ❌ Error: must be number

// ----------------------------
// 4️⃣ Tuple with Type Alias
// ----------------------------
type User1 = [number, string];
const newUser1: User1 = [112, "abc"];
newUser1[1] = "hcm"; // ✅ allowed, index 1 is string
// newUser1[2] = true; // ❌ Error: tuple length is 2

// ⚠️ Note: push() bypasses tuple restriction in TS
// newUser1.push(true); // Allowed in older TS versions, but breaks tuple safety

// ----------------------------
// 5️⃣ Readonly Tuple (safer, prevents push/pop)
// ----------------------------
const safeUser: readonly [number, string] = [1, "safe"];
// safeUser.push(123); // ❌ Error
// safeUser[0] = 999;  // ❌ Error

// ----------------------------
// Summary:
// - Regular arrays allow dynamic lengths, can use unions for multiple types.
// - Tuples enforce type **order** and **length** initially.
// - Readonly tuples prevent modification, making them truly fixed.
// ----------------------------

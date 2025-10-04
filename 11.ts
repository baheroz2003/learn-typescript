// 1. public (default)
// Accessible anywhere (inside class, subclass, outside class).
// If you don’t specify anything, it’s public by default.
// class Person {
//   public name: string; // same as just "name: string"

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p = new Person("Baheroz");
// console.log(p.name); // ✅ allowed
// private
// Accessible only inside the class where it is defined.
// Not accessible outside class or in subclasses.
// class Person {
//   private ssn: string;
//   constructor(ssn: string) {
//     this.ssn = ssn;
//   }
//   showSSN() {
//     return this.ssn; // ✅ allowed
//   }
// }
// const p = new Person("123-456");
// console.log(p.showSSN()); // ✅ allowed
// console.log(p.ssn);       // ❌ Error (private)
// protected
// Accessible inside the class and in subclasses (child classes).
// ❌ Not accessible outside classes directly.
// class Person {
//   protected age: number;

//   constructor(age: number) {
//     this.age = age;
//   }
// }
// class Student extends Person {
//   constructor(age: number) {
//     super(age);
//   }
//   showAge() {
//     return this.age; // ✅ allowed (protected works in subclass)
//   }
// }
// const s = new Student(22);
// console.log(s.showAge()); // ✅
// console.log(s.age);       // ❌ Error (protected)


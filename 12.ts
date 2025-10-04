// Getter (get) → Used to read a private/protected property.
// Setter (set) → Used to update a private/protected property.
// They let you add extra logic (validation, computed values, etc.) while still using normal property-like syntax.
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // getter
  get name(): string {
    return this._name.toUpperCase(); // extra logic
  }
  // setter
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("Name is too short!");
    }
    this._name = newName;
  }
}
const p = new Person("Baheroz");
console.log(p.name); // ✅ calls getter → "BAHEROZ"
p.name = "Zeya";     // ✅ calls setter
console.log(p.name); // "ZEYA"
// p._name ❌ not accessible (private)
// If you only define a getter (no setter), the property becomes read-only:
class Circle {
  constructor(private radius: number) {}
  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const c = new Circle(5);
console.log(c.area); // ✅ 78.5...
// c.area = 100 ❌ Error (no setter)
class Account {
  protected _balance: number = 0;
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this._balance = amount;
  }
}
const acc = new Account();
acc.balance = 1000;   // ✅ calls setter
console.log(acc.balance); // ✅ calls getter → 1000
// Getter (get) → Define computed/read-only properties.
// Setter (set) → Control how values are updated (validation, constraints).
// They make classes more encapsulated and safe.


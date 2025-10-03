// =============================================
// Interface Definition
// =============================================
interface Usern {
  readonly dbId: number; // cannot be changed once set
  email: string;         // must be a string, can be reassigned
  userId: number;        // must be a number
  googleid?: string;     // optional
  startTrail: () => string; 
  getCoupon(couponname: string, value: number): number;
}

// =============================================
// Object implementing Interface
// =============================================
const hitesh: Usern = {
  dbId: 1,
  email: "h@h.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name, off) => {
    return 10;
  }
};

hitesh.email = "h@hc.com"; // ✅ allowed
// hitesh.dbId = 2;        // ❌ Error (readonly)

// =============================================
// Class implementing Interface
// =============================================
class NewUser implements Usern {
  readonly dbId: number;
  email: string;
  userId: number;
  googleid?: string;

  constructor(id: number, email: string, userId: number) {
    this.dbId = id;
    this.email = email;
    this.userId = userId;
  }

  startTrail(): string {
    return "class trail started";
  }

  getCoupon(couponname: string, value: number): number {
    return value;
  }
}

const userFromClass = new NewUser(101, "class@hc.com", 999);
console.log(userFromClass.startTrail());         // "class trail started"
console.log(userFromClass.getCoupon("disc10", 50)); // 50

// =============================================
// 📌 Meaning
// - Interface = blueprint/contract for objects/classes
// - readonly = property cannot be reassigned
// - optional (?) = property may be skipped
// - Object (hitesh) and Class (NewUser) both follow Usern rules


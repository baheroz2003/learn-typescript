// An abstract class is like a blueprint.
// You cannot create an object from it directly.
// It can have:
// normal methods/properties ✅
// abstract methods (must be implemented in subclasses)
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}
    // abstract method (must be implemented in child class)
    abstract getSepia(): void
}
// TakePhoto is abstract, so you cannot do:
// // ❌ Error
// const hc = new TakePhoto("test", "testi");
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("sepia filter applied");
    }
    getReelTime(): number {
        return 8
    }
}
// Instagram extends TakePhoto.
// Since TakePhoto has abstract getSepia(), the subclass must implement it. ✅
const hc = new Instagram("test", "testi", 3);
// console.log(hc.cameraMode); // "test"
// console.log(hc.filter);     // "testi"
// console.log(hc.burst);      // 3
// hc.getSepia(); // "sepia filter applied"
// abstract class → cannot be instantiated.
// // Must implement all abstract methods in subclass.
// // Can have constructor & normal methods too.
hc.getReelTime()

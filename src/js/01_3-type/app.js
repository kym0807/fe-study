// let x = 5;
// let y = x;

// console.log("초기 값:", x, y);

// x = 10;

// console.log("x를 변경한 후:", x, y); // 10, 5

// let obj1 = { name: "Tom" };
// let obj2 = obj1;

// console.log("초기 객체:", obj1, obj2);

// obj1.name = "Jerry";

// console.log("obj1을 변경한 후:", obj1, obj2);

// function changePrimitive(val) {
//   val = val * 2;
//   console.log("함수 내부 (원시값):", val); // 20
// }

// function changeObject(obj) {
//   obj.age = 30;
//   console.log("함수 내부 (객체):", obj); // {name: "Tom", age: 30}
// }

// let num = 10;
// let person = { name: "Tom", age: 20 };

// changePrimitive(num);
// console.log("함수 호출 후 num:", num); // 10

// changeObject(person);
// console.log("함수 호출 후 person:", person); // {name: "Tom", age: 30}

const a = { age: 30 };
let b = a;
b.age = 40;

console.log(a.age);
console.log(b.age);

console.log(a.age === b.age);

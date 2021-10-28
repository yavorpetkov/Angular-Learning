"use strict";
// Basic Types
let id = 5;
let company = 'EPAM';
let isPublished = false;
let x = 'Hello';
let age;
age = 2;
// age = 'word' Error
let ids = [1, 2, 3, 4, 5];
// ids.push('Hello') Error
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Yavor', false];
// let person1: [number,string,boolean] = [1,'Yavor', 12] Error
// let person2: [number,string,boolean] = [1, false,'Yavor'] Error
let employee;
employee = [
    [1, 'Yavor'],
    [1, 'Pesho'],
    [1, 'Kamen']
    // [1,'Kris', false] Error
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);

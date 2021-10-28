// Basic Types
let id: number = 5
let company: string = 'EPAM'
let isPublished: boolean = false
let x: any = 'Hello'
let age: number
age = 2
// age = 'word' Error

let ids: number[] = [1,2,3,4,5]
// ids.push('Hello') Error
let arr: any[] = [1,true,'hello']

// Tuple
let person: [number,string,boolean] = [1,'Yavor', false]
// let person1: [number,string,boolean] = [1,'Yavor', 12] Error
// let person2: [number,string,boolean] = [1, false,'Yavor'] Error
let employee: [number,string][]

employee = [
   [1,'Yavor'],
   [1,'Pesho'],
   [1,'Kamen']
   // [1,'Kris', false] Error
]

// Union
let pid: string | number 
pid = 22

// Enum
enum Direction1{
   Up,
   Down,
   Left,
   Right
}

console.log(Direction1.Up);
console.log(Direction1.Down);

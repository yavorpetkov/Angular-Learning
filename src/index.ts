// Basic Types
let id: number = 5;
let company: string = 'EPAM';
let isPublished: boolean = false;
let x: any = 'Hello';
let age: number;
age = 2;
// age = 'word' Error

let ids: number[] = [ 1, 2, 3, 4, 5 ];
// ids.push('Hello') Error
let arr: any[] = [ 1, true, 'hello' ];

// Tuple
let person: [number, string, boolean] = [ 1, 'Yavor', false ];
// let person1: [number,string,boolean] = [1,'Yavor', 12] Error
// let person2: [number,string,boolean] = [1, false,'Yavor'] Error
let employee: [number, string][];

employee = [
	[ 1, 'Yavor' ],
	[ 1, 'Pesho' ],
	[ 1, 'Kamen' ]
	// [1,'Kris', false] Error
];

// Union
let pid: string | number;
pid = 22;

// Enum
enum Direction1 {
	Up,
	Down,
	Left,
	Right
}

// console.log(Direction1.Up);
// console.log(Direction1.Down);

// objects
type User = {
	id: number;
	name: string;
};
const user: User = {
	id: 1,
	name: 'Yavor'
};

// type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
// not working
// customerId = true

// Functions
function addNum(x: number, y: number): number {
	return x + y;
}
function log(message: string | number): void {
	console.log(message);
}
log(12);

// Interfaces
interface UserInterface {
	// cannot be reasigned
	readonly id: number;
	name: string;
	// oprional
	age?: number;
}
const user1: UserInterface = {
	id: 1,
	name: 'Yavor'
};
// user1.id = 5

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}
const yavor = new Person(1, 'yavor');

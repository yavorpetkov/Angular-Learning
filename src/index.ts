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
interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

class Person implements PersonInterface {
	id: number;
	// private id: number;
	// // private can only be accesed from this class
	name: string;
	// protected name: string;
	// // protected can only be accesed from this class and extended classes

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
	register() {
		return `${this.name} is now registered`;
	}
}

// yavor.id = 5
// yavor.name = kamen
const yavor = new Person(1, 'yavor');

// subclass
class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, 'yavor', 'developer');
console.log(emp.name);

// Genenrics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}
// the T is a placeholder of the type
let numArray = getArray<number>([ 1, 2, 3, 4 ]);
let strrray = getArray<string>([ 'ab', 'cd', 'ef', 'gh' ]);

// numArray.push('hello');

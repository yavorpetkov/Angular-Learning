var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'EPAM';
var isPublished = false;
var x = 'Hello';
var age;
age = 2;
// age = 'word' Error
var ids = [1, 2, 3, 4, 5];
// ids.push('Hello') Error
var arr = [1, true, 'hello'];
// Tuple
var person = [1, 'Yavor', false];
// let person1: [number,string,boolean] = [1,'Yavor', 12] Error
// let person2: [number,string,boolean] = [1, false,'Yavor'] Error
var employee;
employee = [
    [1, 'Yavor'],
    [1, 'Pesho'],
    [1, 'Kamen']
    // [1,'Kris', false] Error
];
// Union
var pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'Yavor'
};
// type assertion
var cid = 1;
// let customerId = <number>cid;
var customerId = cid;
// not working
// customerId = true
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log(12);
var user1 = {
    id: 1,
    name: 'Yavor'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    // protected name: string;
    // // protected can only be accesed from this class and extended classes
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
// yavor.id = 5
// yavor.name = kamen
var yavor = new Person(1, 'yavor');
// subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'yavor', 'developer');
console.log(emp.name);
// Genenrics
function getArray(items) {
    return new Array().concat(items);
}
// the T is a placeholder of the type
var numArray = getArray([1, 2, 3, 4]);
var strrray = getArray(['ab', 'cd', 'ef', 'gh']);
// numArray.push('hello');

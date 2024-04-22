// Task 1
function CarConstructor (brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

class Car {
    constructor (brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

let car1 = new CarConstructor ("Mazda", "6", 2020)
let car2 = new Car ("Toyota", "Camry", 2022)

console.log(car1)
console.log(car2, '\n')


// Task 2
let car3 = Object.create(Car.prototype)
car3.brand = "Hundai"
car3.model = "Elantra"
car3.year = 2018

let car4 = Object.create(CarConstructor.prototype)
car4.brand = "Mitsubishi"
car4.model = "Lancer"
car4.year = 2019

console.log(car3)
console.log(car4, '\n')


// Task 3
function Person(name, lastname, year) {
    this.name = name;
    this.lastname = lastname;
    this.year = year;

    this.getFullname = function () {
        console.log("Person -", name, lastname);
    };

    this.getAge = function () {
        let age = new Date().getFullYear() - year;
        console.log("Age -", age, '\n');
    };
}

let person = new Person("Mariia", "Skachkova", 2004)
person.getFullname()
person.getAge()


// Task 4
function Employee(name, lastname, year, position) {
    Person.call(this, name, lastname, year);
    this.position = position;

    this.getFullname = function () {
        console.log("Employee -", name, lastname, "(" + position + ")");
    };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let employee = new Employee("Jim", "Carrey", 1962, "Actor");
employee.getFullname();
employee.getAge();


// Task 5
function CheckClass (obj1, obj2) {
    let class1 = obj1.constructor.name
    let class2 = obj2.constructor.name

    if (class1 == class2) {
        console.log("Both objects are", class1)
    } else {
        console.log("Objects are different classes")
    }
    console.log("obj1 -", class1)
    console.log("obj2 -", class2, '\n')
}

CheckClass(car2, person)
CheckClass(car3, car4)


// Task 6
function ObservedPerson(person) {
    let observedPerson = {};

    observedPerson.name = person.name;
    observedPerson.lastname = person.lastname;
    observedPerson.year = person.year;
    observedPerson.callCount = 0;

    observedPerson.getFullname = function () {
        console.log("ObservedPerson -", observedPerson.name, observedPerson.lastname);
        observedPerson.callCount++;
        console.log("Calls -", observedPerson.callCount);
    };

    observedPerson.getAge = function () {
        let age = new Date().getFullYear() - observedPerson.year;
        console.log("ObservedPerson Age -", age);
        observedPerson.callCount++;
        console.log("Calls -", observedPerson.callCount, '\n');
    };

    return observedPerson;
}

let observedPerson = ObservedPerson(person);
observedPerson.getFullname();
observedPerson.getAge();


// Task 7
class Shape {
    Area() {}
    Perimeter() {}
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    Area() {
        let area = this.width * this.height;
        console.log("Rectangle area -", area)
    }

    Perimeter() {
        let perimentr = 2 * (this.width + this.height)
        console.log("Rectangle perimeter -", perimentr, '\n')
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }

    Area() {
        let area = (this.radius * Math.PI).toFixed(2);
        console.log("Circle area -", area)
    }

    Perimeter() {
        let perimentr = (2 * (this.radius * Math.PI)).toFixed(2)
        console.log("Circle perimeter -", perimentr, '\n')
    }
}

let rectangle = new Rectangle(5, 8);
let circle = new Circle(5);

rectangle.Area()
rectangle.Perimeter()
circle.Area()
circle.Perimeter()


// Task 8
let rectangle_ = new Rectangle(10, 5);
let circle_ = new Circle(6);
let shapesArray = [rectangle_, circle_];

for (let shape of shapesArray) {
    shape.Area();
    shape.Perimeter();
}
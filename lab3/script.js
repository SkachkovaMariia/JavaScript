// Task 1
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random Number:', randomNumber);
console.log('\n');

// Task 2
let int = 5;
let float = 5.5;
let str = "string";
let bool = true;
console.log('Variable 1:', int);
console.log('Variable 2:', float);
console.log('Variable 3:', str);
console.log('Variable 4:', bool);
console.log('\n');

// Task 3
let sum = int + float;
console.log('Sum:', sum);
console.log('\n');

// Task 4
// alert('This is an alert!');
// let userInput = prompt('Enter something:');
// confirm('Are you sure?');

// Task 5
// let userAge = prompt('Enter your age:');
// alert('Your age is ' + userAge);

// Task 6
// let quantity = parseFloat(prompt('Enter the quantity of the item:'));
// let pricePerUnit = parseFloat(prompt('Enter the price per unit:'));
// let totalPurchase = quantity * pricePerUnit;
// alert('Total Purchase: ' + totalPurchase);

// Task 7
// let userNumber = parseFloat(prompt('Enter a number:'));
// if (userNumber < 0) {
//     alert('The number is negative');
// } else {
//     alert('The number is positive');
// }

// Task 8
// let dayOfWeekNumber = parseInt(prompt('Enter the day of the week (1-7):'));
// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let dayName = daysOfWeek[dayOfWeekNumber - 1];
// alert('Day of the week - ' + dayName);

// Task 9
const multiplicationNum = 6;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplicationNum} x ${i} = ${multiplicationNum * i}`);
}
console.log('\n');

// Task 10
let arr = [1, -3, 6, -9, 12];
let third = arr[2] ** 2;
let arrSum = arr[0] + arr[arr.length - 1];
let negativeSum = arr.filter(num => num < 0).reduce((acc, num) => acc + num ** 2, 0);
console.log('Third Number Square:', third);
console.log('Sum of First and Last:', arrSum);
console.log('Sum of Negative Squares:', negativeSum);
console.log('\n');

// Task 11
class Car {
    constructor(owner, model, engine) {
      this.owner = owner;
      this.model = model;
      this.engine = engine;
    }
  }
  
  let cars = [
    new Car('Sasha', 'Toyota', 3.5),
    new Car('Anna', 'Honda', 2.0),
    new Car('Ostap', 'Mazda', 2.5)
  ];
  
  let minEngine = cars.reduce(function (minCar, car) {
    if (car.engine < minCar.engine) {
      return car;
    } else {
      return minCar;
    }
  });
  
  console.log('Car with Minimum Engine Volume:', minEngine);
  console.log('\n');
  
  // Task 12
// let a = parseFloat(prompt('Enter a:'));
// let b = parseFloat(prompt('Enter b:'));
// let c = parseFloat(prompt('Enter c:'));
// let d = parseFloat(prompt('Enter d:'));

// let result = Math.max(Math.min(a, b), Math.min(c, d));
// alert('Max{min(a, b), min(c, d)}:' + result);

// Task 13
let word = "test";
console.log('The word:', word);
console.log('Length of the word:', word.length);
console.log('Word in reverse:', word.split('').reverse().join(''));
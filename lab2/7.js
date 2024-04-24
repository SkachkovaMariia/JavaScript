const person = { name: 'John', age: 23, city: 'Boston' };

const {name: personName, city: personCity} = person;

console.log(personName);
console.log(personCity);

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 25, city: 'New York' },
    { name: 'Tom', age: 19, city: 'Austin' },
    { name: 'James', age: 22, city: 'Washington' },
    { name: 'Arthur', age: 29, city: 'San Francisco' }
];

const {name: arrName, age: arrAge, city: arrCity} = persons[0];

console.log(arrName);
console.log(arrAge);
console.log(arrCity);
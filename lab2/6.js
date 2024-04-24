const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 25, city: 'New York' },
    { name: 'Tom', age: 19, city: 'Austin' },
    { name: 'James', age: 22, city: 'Washington' },
    { name: 'Arthur', age: 29, city: 'San Francisco' }
];

const overTwenty = persons.filter(person => person.age > 20);

console.log(overTwenty);
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 25, city: 'New York' },
    { name: 'Tom', age: 19, city: 'Austin' },
    { name: 'James', age: 22, city: 'Washington' },
    { name: 'Arthur', age: 29, city: 'San Francisco' }
];

persons.forEach(person => {
    Object.defineProperty(person, 'birthYear', {
        get: function() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.age;
        },
        enumerable: true,
        configurable: false
    });
});

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

console.log(persons[0].birthYear);
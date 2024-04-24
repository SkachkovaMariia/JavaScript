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

let personsString = persons.map(person => {
    return person.name + " from " + person.city + " born in " + person.birthYear;
});

console.log(personsString);
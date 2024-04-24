const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 25, city: 'New York' },
    { name: 'Tom', age: 19, city: 'Austin' },
    { name: 'James', age: 22, city: 'Washington' },
    { name: 'Arthur', age: 29, city: 'San Francisco' }
];

function getUserData(userName) {
    const result = persons.find(person => person.name === userName);
    if (result === undefined) {
        return new Error("Unable to find user");
    }
    return result;
}

function showUserInfo(userName) {
    console.log("Loading...");
    console.log(getUserData(userName));
    console.log("Loading finished");
}

showUserInfo("James");
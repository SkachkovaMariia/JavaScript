function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const users = [
    { firstname: 'John', lastname: 'Doe', score: 80 },
    { firstname: 'Alice', lastname: 'Smith', score: 92 },
    { firstname: 'Bob', lastname: 'Johnson', score: 75 },
    { firstname: 'Eva', lastname: 'Brown', score: 88 },
    { firstname: 'David', lastname: 'Lee', score: 95 },
    { firstname: 'Emma', lastname: 'Taylor', score: 78 },
    { firstname: 'Frank', lastname: 'Wilson', score: 87 },
    { firstname: 'Grace', lastname: 'Miller', score: 91 },
    { firstname: 'Henry', lastname: 'Davis', score: 82 },
    { firstname: 'Isabel', lastname: 'Moore', score: 89 },
    { firstname: 'Jack', lastname: 'White', score: 73 },
    { firstname: 'Katherine', lastname: 'Clark', score: 94 },
    { firstname: 'Louis', lastname: 'Thomas', score: 79 },
    { firstname: 'Mia', lastname: 'Martin', score: 86 },
    { firstname: 'Noah', lastname: 'Jones', score: 83 },
    { firstname: 'Olivia', lastname: 'Anderson', score: 90 },
    { firstname: 'Peter', lastname: 'Taylor', score: 77 },
    { firstname: 'Quinn', lastname: 'Harris', score: 96 },
    { firstname: 'Ryan', lastname: 'Moore', score: 84 },
    { firstname: 'Sophia', lastname: 'Wilson', score: 76 },
];


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUsers() {
    await delay(1000);
    const randomUsers = [];

    for (let i = 0; i < 10; i++) {
        const randomIndex = getRandomNumber(0, users.length - 1);
        randomUsers.push(users[randomIndex]);
    }

    return randomUsers;
}

function getNewUsers() {
    return users.slice(0, 5);
}

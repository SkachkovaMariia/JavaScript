// Task 1
const average = (...args) => {
    if (args.length == 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
};
  
console.log("Avg -", average(0, 6, 15));


// Task 2
const values = (f, low, high) => {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
};
  
function square(x) {
    return x * x;
}

console.log('\nValue arr -', values(square, 1, 5));


// Task 3
let person = {
    name: "Mariia",
    age: 20
};

function callWithContext (obj, callback) {
    callback.call(obj)
}

function personMessage () {
    let date = new Date().toLocaleDateString()
    console.log("\nToday is", date, "Happy birthday", this.name)
}

callWithContext(person, personMessage)


// Task 4
function returnObj() {
    let value = 0;

    return {
        increment: function() {
            value++;
        },
        getValue: function() {
            return value;
        }
    };
}

let obj = returnObj();
obj.increment();
console.log('\nValue =', obj.getValue());
obj.increment();
obj.increment();
console.log('Value =', obj.getValue());


// Task 5
function createGreetingCache() {
    let cache = {};
    let lastCall = "";

    return function getGreeting(name) {
        if (name == lastCall) {
            console.log("Using cached greeting for", name);
            return cache[name];
        }

        let greeting = `Hello ${name}`;
        cache[name] = greeting;
        lastCall = name;

        return greeting;
    };
}
let getGreeting = createGreetingCache();

console.log('\n');
console.log(getGreeting('Mariia'));
console.log(getGreeting('Sasha'));
console.log(getGreeting('Sasha'));


// Task 6
function add (x) {
    return function (y) {
        return x + y
    }
}

console.log('\n');
console.log(add(5)(2));
console.log(add(10)(3));
console.log(add(20)(20));


// Task 7
function includesFragment (arr) {
    return function (fragment) {
        return arr.includes(fragment);
    } 
}
  
console.log('\n');
let fragmentArr = includesFragment(["Mariia", "Sasha", "Ostap"]);
console.log(fragmentArr("Mariia"));
console.log(fragmentArr("Andriy"));
  

// Task 8
let arr = [
    { name: 'mariia', age: 20 },
    { name: 'sasha', age: 20 }
];

const upperCaseProperty = (array, propertyName) => {
    return array.map(obj => {
        let propertyValue = obj[propertyName];
        const modifiedValue = propertyValue.charAt(0).toUpperCase() + propertyValue.slice(1);
            return { ...obj, [propertyName]: modifiedValue };
    })
}
let newArr = upperCaseProperty(arr, 'name')

console.log('\n');
for (person of newArr) {
    console.log(person)
}


// Task 9
function greet(message) {
    console.log(message + ", " + this.name);
}

greet.call(person, "\nHello");
greet.apply(person, ["Hi"]);

let greetPerson = greet.bind(person);
greetPerson("Nice to meet you");


// Task 10
function logFunctionCall (callback, ...args) {
    console.log(`\nFunction: ${callback.name}; Arguments: ${args}; Time: ${new Date()}`);
    callback(...args);
};
  
function testFunction (name, age) {
    console.log(`${name} - ${age} years old.`);
};
  
logFunctionCall(testFunction, "Mariia", 20);
  

// Task 11
function cacheFunction() {
    let lastResult;
    let lastCallTime;

    return function() {
        let currentTime = new Date();
        if (!lastCallTime || (currentTime - lastCallTime) >= 10000) {
            lastResult = functionToCache();
            lastCallTime = currentTime;
            console.log('Result calculated and cached')
        } else {
            console.log('Result retrieved from cache');
        }

        return lastResult;
    }
}

function functionToCache() {
    return Math.floor(Math.random() * 100) + 1;
}

let cachedFunction = cacheFunction();

console.log('\n');
console.log(cachedFunction());
console.log(cachedFunction());

setTimeout(() => {
    console.log(cachedFunction());
}, 10000);

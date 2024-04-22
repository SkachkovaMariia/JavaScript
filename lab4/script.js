// Task1
let persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 28, city: 'San Francisco' },
    { name: 'Emily', age: 25, city: 'Los Angeles' },
    { name: 'Michael', age: 22, city: 'Chicago' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

for (const person of persons) {
    console.log('Name:', person.name, 'Age:', person.age, 'City:', person.city);
} 
  console.log('\n');

for (let i = 0; i < persons.length; i++) {
  console.log('Name:', persons[i].name, 'Age:', persons[i].age, 'City:', persons[i].city);
}
console.log('\n');

console.log('Group:', persons.groupName, ', Teacher:', persons.teacher, ', Year:', persons.year, '\n');


// Task2
let defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
let userSetting = { mode: 'production', debugLevel: 'trace' };

let merged1 = Object.assign({}, defaults, userSetting);
let merged2 = { ...defaults, ...userSetting };
let merged3 = mergeSettings(defaults, userSetting);

function mergeSettings(defaults, userSetting) {
    let mergedSettings = { ...defaults };

    for (let key in userSetting) {
        if (userSetting.hasOwnProperty(key)) {
            mergedSettings[key] = userSetting[key];
        }
    }

    return mergedSettings;
}

console.log(merged1);
console.log(merged2);
console.log(merged3);


// Task3
persons.forEach(person => {
    Object.defineProperty(person, 'birthYear', {
        get: function () {
            return currentYear = new Date().getFullYear();
        },
        enumerable: true 
    });
});
  
console.log("\nBirth year - " + persons[0].birthYear, '\n');
  

// Task4
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

let mergedArr1 = arr1.concat(arr2);
let mergedArr2 = [...arr1, ...arr2];
let mergedArr3 = arr1.concat(arr2);

console.log("Merged arr1: " + mergedArr1.join(', '));
console.log("Merged arr2: " + mergedArr2.join(', '));
console.log("Merged arr3: " + mergedArr3.join(', '), '\n');


// Task5
function formatPerson(person) {
    return `${person.name} from ${person.city} born in ${person.birthYear}\n`;
}
let fragments = persons.map(formatPerson);
  
console.log(fragments.join(''));


// Task6
let over20 = persons.filter(person => person.age > 20)

for (person of over20) {
    console.log(person);
} 


// Task7
const { name, city } = persons[0];
console.log('\n', name, '-', city);

const [firstPerson] = persons;
console.log(firstPerson);


// Task8
function getUserData(username) {
    let user = persons.find(person => person.name == username);
    if (user == null) {
        throw new Error("Unable to find user");
    }
    return user;
}
  
function showUserInfo(username) {
    console.log("\nLoading...");
  
    try {
      let userData = getUserData(username);
      console.log("Loading finished");
      console.log(userData);
    } 
    catch (error) {
      console.log('Loading finished');
      console.error(error.message);
    }
}
  
showUserInfo('Alice');
showUserInfo('Test');
  

// Task9
function textSplit(text) {
    return text.split('');
}
let text = "test"
  
console.log("\nSplitted tex -", textSplit(text))


// Task10
function reverseWord(word) {
    return word.split('').reverse().join('');
}
let word = "test"
  
console.log("\nReversed word -", reverseWord(text))


// Task11
function isJS(file) {
    return file.endsWith('.js');
}
let file1 = 'text.txt'
let file2 = 'script.js'

console.log('\n')
console.log(file1, "JS check -", isJS(file1))
console.log(file2, "JS check -", isJS(file2))


// Task12
function sentenceToWords(sentence) {
    return sentence.split(' ');
}
let sentence = "Test sentense JS"

console.log("\nWords -", sentenceToWords(sentence))


// Task13
function replaceWord (fragment, findWord, newWord) {
    return fragment.replace(findWord, newWord)
}
let fragment = "Test sentense JS"
let findWord = 'JS'
let newWord = 'JavaScript'
let replaced = replaceWord(fragment, findWord, newWord)

console.log("\nFragment -", fragment)
console.log("Replaced", findWord, "to", newWord)
console.log("New fragment -", replaced)
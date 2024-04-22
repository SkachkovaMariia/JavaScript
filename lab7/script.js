// TASK 1
function invokeAfterDelay(func, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = func();
            resolve(result);
        }, delay);
    });
}
  
const randomPromise = invokeAfterDelay(() => Math.floor(Math.random() * 11), 2000);
// randomPromise.then((result) => console.log("Promise - " + result + "\n"));
  

// TASK 2
async function produceRandomAfterDelay(delay) {
    const result = await invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
    return result;
}
  
const result1 = produceRandomAfterDelay(2000);
const result2 = produceRandomAfterDelay(3000);

// Promise.all([result1, result2]).then(([res1, res2]) => {
//     const sum = res1 + res2;
//     console.log("Sum - " + sum + "\n");
// });
  

// TASK 3
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function runPromise() {
    console.log('Start sleeping');
    await sleep(2000);
    console.log('Sleeping finished');
}
  
// runPromise();
  

// TASK 4
function getUser(id) {
    const users = [
        { id: 0, name: 'User 0', age: 25, city: 'City 0' },
        { id: 1, name: 'User 1', age: 30, city: 'City 1' },
        { id: 2, name: 'User 2', age: 22, city: 'City 2' },
        { id: 3, name: 'User 3', age: 28, city: 'City 3' },
    ];
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject('User not found \n');
            }
        }, 1000);
    });
}
  
// getUser(2)
//     .then(user => console.log(user, "\n"))
//     .catch(error => console.error(error));
  

// TASK 5
async function loadUsers(ids) {
    const promises = ids.map(id => getUser(id));
  
    try {
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error('Error loading users:', error);
        throw error;
    }
}
  
// loadUsers([1, 2, 3])
//   .then(users => {
//     for (const user of users) {
//       console.log(user);
//     }
//   })
//   .catch(error => console.error('Error in main:', error, "\n"));


// TASK 6
function logCall(callback) {
    return new Promise(resolve => {
      setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Current time: ${currentTime}`);
        resolve();
      }, 1000);
    }).then(callback);
}
  
// logCall(() => console.log('Callback 1'))
//     .then(() => logCall(() => console.log('Callback 2')))
//     .then(() => logCall(() => console.log('Callback 3')))
//     .then(() => logCall(() => console.log('Callback 4')));
  

// TASK 7
async function showUsers(ids) {
    console.log('Loading...');
    
    try {
        const users = await loadUsers(ids);
        console.log('Users loaded:', users);
    } catch (error) {
        console.error('Error loading users:', error);
    } finally {
        console.log('Loading finished');
    }
}
  
showUsers([0, 1, 2, 3]); 
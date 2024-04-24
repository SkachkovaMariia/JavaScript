const arr1 = [32, 521, -43, 93, 0];
const arr2 = [-12, 0, 654, 29, 1];

// 1 спосіб
let merged = [...arr1, ...arr2];

// 2 спосіб
merged = arr1.concat(arr2);

// Також можна використати метод push(), але це призведе до змінення першого масиву
arr1.push(...arr2);

console.log(merged);
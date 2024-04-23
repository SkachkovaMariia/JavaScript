const input = prompt("Введіть слово: ");
const arr = input.split('');

alert("Довжина слова: " + arr.length + "\n" + "Слово в зворотному порядку: " + arr.reverse().join(''));
const input = prompt("Введіть 4 числа через пробіл: ");
const arr = input.split(' ');
const minAB = Math.min(arr[0], arr[1]);
const maxCD = Math.max(arr[2], arr[3]);
alert("Min(a, b): " + minAB + "\n" + "Max(c, d): " + maxCD);
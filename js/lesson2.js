// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// const stylesShift = styles.shift();
// // console.log(stylesShift);

// styles.unshift("Рэп", "Регги");
// const stylesTwo = ["Рэп", "Регги"];
// const stylesThree = stylesTwo.concat(styles);

// console.log(styles);
// // console.log(stylesThree);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(array) {
//   for (let item of array) {
//     console.log(array.indexOf(item), item);
//   }
// }

// const myArray = ["Mango", "Poly", "Ajax"];
// logItems(myArray);

// АДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)

// function findSmallestNumber(numbers) {
//   let firstNum = numbers[0];
//   for (const num of numbers) {
//     if (firstNum < num) {
//       firstNum = num;
//     }
//   }
//   return firstNum;
// }
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
// const numbers = [2, 17, 94, 1, 23, 37];

// console.log(firstNum);
// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
const str = "ротатор"; //true
// const newString = "Hello";//false
// const array1 = str.split("");
// const array2 = array1.reverse();
// const str2 = array2.join("");
// console.log(str === str2);
const newVal = str.split("").reverse().join("");
console.log(newVal === str);

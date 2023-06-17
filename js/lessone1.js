// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА
// "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Bogdan";
// const age = 35;
// const language = "JavaScript";

// console.log(
//   `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`
// );

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("введіть своє імя");
// const tel = prompt("введіть свій телефон ");
// const email = prompt("введіть свою пошту");

// console.log(`користувач ${name}, телефон ${tel}, пошта ${email}`);
// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ
// const nameProd1 = Number(prompt("Введіть ціну Телевізора."));
// const nameProd2 = +prompt("Введіть ціну телефону.");
// const nameProd3 = +prompt("Введіть ціну холодильнику.");
// const sum = nameProd1 + nameProd2 + nameProd3;

// console.log(`Вартість товару ${sum}`);
// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"
// const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"))
// // if (month === 12) { console.log("вірно") } else { console.log("НЕ ЗНАЄТЕ? 12") }
// const newmonth = month === 12 ? "вірно" : "не знаєте 12";
// console.log(newmonth);


// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО, ЧИ НЕ ПАРНЕ.

// const number = Number(prompt("Ведіть число"));

// if (number % 2 === 0) {
//     console.log('Парне');
// } else {
//     console.log('Непарне');

// }

// const number1 = number % 2 === 0 ? 'Парне' : 'Непарне';

// console.log(number1);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// 12 - 2
// 3 - 5
// 6 - 8
// 9 - 11

// const month = Number(prompt("місяць народження?"));

// if (month === 12 || month === 1 || month === 2) {
//    console.log("Зима");
// } else if (month >= 3 && month <= 5 ) {
//    console.log("Весна");
// } else if (month >= 6 && month <= 8 ) {
//    console.log("Літо");
// } else if (month >= 9 && month <= 11 ) {
//    console.log("Осінь");
// } else {
//    console.log("Перевірь дані!");
// }


// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН

const login = prompt("Введіть логін");
const password = prompt("введіть пароль");

const loginUser = "Abba";
const passwordUser = "123A";

if (loginUser === login && passwordUser === password) {
  console.log("Вітаю вірно");
}
  else {
  console.log("Не вірно");
  }

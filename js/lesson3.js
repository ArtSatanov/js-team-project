// ЗАДАЧА 1 Напишіть дві функції: letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек
// функцію(callback) greet(name) - колбек, який приймає імя і логінує в консоль рядок "Привіт" + імя

// function letMeSeeYourName(greet) {
//         const name = prompt('Введіть імя');
//         greet(name);
//     }
//     function greet(name) {
//         console.log(`Привіт ${name}`);
//     }
// letMeSeeYourName(greet);
// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, collback) {
//   const good = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   collback(good);
// }
// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

// 1)получити масив вчених які народились у 19ст;

// function getSientist() {
//   return scientists
//     .filter((scient) => scient.born < 1900 && scient.born > 1800)
//     .map(({ name, surname }) => `${name} ${surname}`);
// }

// console.log(getSientist());

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// function getAvarageYers() {
//   return scientists.reduce((acc, item, index, array) => {
//     acc = acc + (item.dead - item.born);

//     return acc;
//   }, 0);
// }
// getAvarageYers();
// const getAvarage = getAvarageYers() / scientists.length;

// console.log(getAvarage);
// 3) відсортувати по алфавіту;
// function sortScientistsByAlfabet() {
//   // return [...scientists].sort((smartPeople1, smartPeople2) => smartPeople1.name.localeCompare(smartPeople2.name));
//    return [...scientists].sort((smartPeople1, smartPeople2) => smartPeople1.name > smartPeople2.name ? -1 : 1);
// }
// console.log(sortScientists());
// 4)відсортувати по кількості прожитих років;
// function sortScientistsByYearsToAlive() {
//   return [...scientists].sort((smartPeopple1, smartPeopple2) => (smartPeopple1.dead - smartPeopple1.born) - (smartPeopple2.dead - smartPeopple2.born) );
// };
// const result = sortScientistsByYearsToAlive();
// console.log(
//   result
// )

// 5)відфільтрувати, хто народився в 15,16,17ст;
// function getBorn() {
//   return scientists.filter(({ born }) => born > 1500 && born < 1800);
// }

// const res = getBorn();
// console.log(res);

// 6)знайти рік народження Albert Einstein;

// function getEMC2() {
//   return scientists.find(
//     ({ name, surname }) => name === "Albert" && surname === "Einstein"
//   ).born;
// }

// const res = getEMC2();
// console.log(res);

// 7)визначити, чи усі вчені працювали у 19ст;


// function ifEveryOne() {
//   return scientists.every(value => value.dead < 1920 && value.born >= 1780);
// }

// const result = ifEveryOne();
// console.log(result);

// ЗАДАЧА 4
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.
// const prices = [2, 14, 1, 37, 26, 8];

// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")
// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.

// ЗАДАЧА НА ЗАМИКАННЯ 5
// У вас є функція counter(), яка повинна повернути нове значення лічильника кожного разу, коли вона викликається. Проте, коли ви викликаєте counter() два рази, вона повертає одне і те ж значення. Ви хочете, щоб кожен виклик counter() повертав нове значення лічильника. Використовуючи замикання, напишіть функцію, яка розв'язує цю проблему.

// ЗАДАЧА 6
// Напишіть дві функції letMeSeeYourName(callback) - запитує ім'я користувача
// через prompt та викликає callback функцію
// greet(name) - коллбек, що приймає ім'я і логірує в консоль
// Рядок "Привіт <name>"
// Реалізуй перевірку, що prompt не порожній


// ЗАДАЧА 7
// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім'я та ціну товару, а також callback.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор як id і викликає callback
// Передаючи йому створений об'єкт.
// showProduct(product) - коллбек приймаючий об'єкт
// продукту і логірующий їх у консоль

// ЗАДАЧА 8
// Виправте помилки, щоб код працював
//  const product = {
//  ціна: 5000,
//  showPrice() {
//  console.log(price);
//  },
// };
//  product.showPrice();


// ЗАДАЧА 8
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice);
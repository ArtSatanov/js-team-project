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

function getAvarageYers() {
  return scientists.reduce((acc, item, index, array) => {
    acc = acc + (item.dead - item.born);

    return acc;
  }, 0);
}
getAvarageYers();
const getAvarage = getAvarageYers() / scientists.length;

console.log(getAvarage);

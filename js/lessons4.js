// // ЗАДАЧА 1
// // Створіть карточки товару з масиву використовуючи createElement

// // js/

// // html/
// // <ul class="js-goods"></ul>

// // import cars from "./data/car.js";
// // const ulEl = document.querySelector(".js-goods");
// // const markup = cars.map(({ name, img, price, description }) => {
// //   const liEl = document.createElement("li");
// //   const titleEl = document.createElement("h2");
// //   const carImg = document.createElement("img");
// //   const carPrice = document.createElement("p");
// //   const descCar = document.createElement("p");

// //   titleEl.textContent = name;
// //   carImg.width = 200;
// //   carImg.src = img;
// //   carImg.alt = name;
// //   carPrice.textContent = price;
// //   descCar.textContent = description;
// //   liEl.append(titleEl, carImg, carPrice, descCar);
// //   return liEl;
// // });
// // ulEl.append(...markup);

// // ЗАДАЧА 2
// // 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// // html/
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };
// const inpPrice = document.querySelector("#price");
// const inpQuant = document.querySelector("#quantity");
// const endPrice = document.querySelector(".text-right.total");
// const formEl = document.querySelector("form");
// const amountEl = document.querySelector(".amount");
// const containerEl = document.querySelector(".container");

// formEl.addEventListener("input", onEntrPrice1);
// formEl.addEventListener("submit", onEntrPrice);
// containerEl.style.backgroundColor = randomRgbColor();

// function onEntrPrice(evt) {
//   evt.preventDefault();
//   const val1 = inpPrice.value;
//   const val2 = inpQuant.value;
//   amountEl.textContent = val2;
//   const totalPrice = val1 * val2;
//   endPrice.textContent = totalPrice;
// }
// function onEntrPrice1(evt) {
//   const val2 = inpQuant.value;
//   amountEl.textContent = val2;
// }

// // 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// // ЗАДАЧА 3
// // 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
// //  <ul class="js-list"></ul>

// // const instruments = [{
// //   id: 1,
// //   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
// //   name: "Молоток",
// //   price: 150
// // },
// // {
// //   id: 2,
// //   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
// //   name: "Перфоратор",
// //   price: 3000
// // },{
// //   id: 3,
// //   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
// //   name: "Рівень",
// //   price: 2000
// // }]

// // 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// // ЗАДАЧА 4
// // ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// // // є елемент масиву , який незнає нікого
// // // якщо не одна така людина , то вертаємо not found
// // // якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

// // const people1 = [{
// //   name: 'Alex',
// //   know: ["Eva", "Jhon"],
// // },
// // {
// //   name: 'Ivan',
// //   know: ["Jhon", "Alex"],
// // },
// // {
// //   name: 'Eva',
// //   know: ["Alex", "Jhon"],
// // },
// // {
// //   name: 'Jhon',
// //   know: [],
// // }]

// // const people2 = [{
// //   name: 'Alex',
// //   know: ["Eva", "Jhon"],
// // },
// // {
// //   name: 'Jhon',
// //   know: ["Eva"],
// // },
// // {
// //   name: 'Eva',
// //   know: [],
// // },
// // {
// //   name: 'Ivan',
// //   know: ["Jhon", "Alex"],
// // }]

// // const people3 = [{
// //   name: 'Alex',
// //   know: ["Eva", "Jhon"],
// // },
// // {
// //   name: 'Jhon',
// //   know: [],
// // },
// // {
// //   name: 'Eva',
// //   know: ["Alex", "Jhon"],
// // },
// // {
// //   name: 'Ivan',
// //   know: ["Jhon", "Alex"],
// // }]

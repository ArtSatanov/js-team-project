// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/

// html/
// <ul class="js-goods"></ul>

import cars from "./data/car.js";
const ulEl = document.querySelector(".js-goods");
const markup = cars.map(({ name, img, price, description }) => {
  const liEl = document.createElement("li");
  const titleEl = document.createElement("h2");
  const carImg = document.createElement("img");
  const carPrice = document.createElement("p");
  const descCar = document.createElement("p");

  titleEl.textContent = name;
  carImg.style.width = 200;
  carImg.src = img;
  carImg.alt = name;
  carPrice.textContent = price;
  descCar.textContent = description;
  liEl.append(titleEl, carImg, carPrice, descCar);
  return liEl;
});
ulEl.append(...markup);

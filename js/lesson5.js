// // ЗАДАЧА 1
// // ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// // ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())
// const MY_KEY = "31974365-341749123fa485f09eb8b1d6d";
// const imageListElement = document.querySelector(".images-list");
// fetch(`https://pixabay.com/api/?key=${MY_KEY}&colors=black+gray`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.hits);
//     const imagesArray = data.hits;

//     imagesArray.forEach((element) => {
//       const imageItem = document.createElement("li");
//       const image = document.createElement("img");
//       image.src = element.largeImageURL;
//       image.alt = element.tags;
//       imageItem.append(image);
//       imageListElement.append(imageItem);
//     });
//   })
//   .catch((error) => {
//     window.alert(error);
//   });

// ====================================================================

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// const formRef = document.querySelector("#form");
// const inputRef = document.querySelector("#input");
// const resultRef = document.querySelector(".result");

// formRef.addEventListener("submit", getCocktail);

// function getCocktail(evt) {
//   evt.preventDefault();
//   const nameOfCocktail = inputRef.value;

//   fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       createMarkup(data.drinks);
//     });
// }

// function createMarkup(array) {
//   let markup = array
//     .map(
//       ({ strDrink, strDrinkThumb }) =>
//         `<div><h2>${strDrink}</h2><img src="${strDrinkThumb}" alt="${strDrink}" width='300'></div>`
//     )
//     .join("");

//   resultRef.insertAdjacentHTML("beforeend", markup);
// }

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user

const elements = {
  input: document.querySelector("#input"),
  form: document.querySelector("#form"),
  result: document.querySelector(".result"),
  loadBtn: document.querySelector(".loadBtn"),
};
let userNumber = 1;

elements.form.addEventListener("submit", handlerSubmit);
elements.loadBtn.addEventListener("click", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const inputValue = elements.input.value || [];
  console.log(inputValue);
  fetch(
    `https://api.github.com/search/users?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${userNumber}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (data.items.length > 0) {
        userItem(data.items);
        userNumber++;
      } else {
        alert("Пользователь не найден!");
      }
    });
}

function userItem(arr) {
  const markup = arr
    .map(
      ({ avatar_url, html_url, login }) => `<div>
      <img src="${avatar_url}" alt="${login}">
      <h2>${login}</h2>
      <a href="${html_url}">GitHub Link</a>
    </div>`
    )
    .join("");

  elements.result.insertAdjacentHTML("beforeend", markup);
}

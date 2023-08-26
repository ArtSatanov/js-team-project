// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())
const MY_KEY = "31974365-341749123fa485f09eb8b1d6d";
const imageListElement = document.querySelector(".images-list");
fetch(`https://pixabay.com/api/?key=${MY_KEY}&colors=black+gray`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.hits);
    const imagesArray = data.hits;

    imagesArray.forEach((element) => {
      const imageItem = document.createElement("li");
      const image = document.createElement("img");
      image.src = element.largeImageURL;
      image.alt = element.tags;
      imageItem.append(image);
      imageListElement.append(imageItem);
    });
  })
  .catch((error) => {
    window.alert(error);
  });

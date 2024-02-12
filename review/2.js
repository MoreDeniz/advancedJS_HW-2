// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const container = document.querySelector(".container_review");
const productInput = document.querySelector("#product");
const reviewInput = document.querySelector("#review");
const errorMsg = document.querySelector(".error");
const button = document.querySelector("#send");

function addReview() {
  initialData.forEach((element) => {
    // Элементы отзыва
    let reviewBox = document.createElement("div");
    let product = document.createElement("h3");
    let review = document.createElement("p");

    //
    product.textContent = element.product;
    review.textContent = element.reviews[0].text;

    //
    reviewBox.appendChild(product);
    reviewBox.appendChild(review);

    //
    container.appendChild(reviewBox);
  });
}

button.addEventListener("click", () => {
  try {
    // Проверка длины
    if (reviewInput.value.length < 50 || reviewInput.value.length > 500) {
      throw new Error(
        "Длина введенного отзыва не может быть менее 50 или более 500 символов!"
      );
    }

    // Создаём элементы html для нового отзыва: div, h3, p
    let reviewBox = document.createElement("div");
    let product = document.createElement("h3");
    let review = document.createElement("p");

    // Помещаем введённые заголовок и текст
    product.textContent = productInput.value;
    review.textContent = reviewInput.value;

    // Помещаем заголовок и текст в div
    reviewBox.appendChild(product);
    reviewBox.appendChild(review);

    // Помещаем отзыв (div) в контейнер
    container.appendChild(reviewBox);
  } catch (error) {
    // Сообщение об ошибке
    errorMsg.textContent = error.message;
  }
});

// Вызов функции
addReview();

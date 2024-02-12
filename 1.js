// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Book {
    title;

    constructor(title) {
        this.title = title;
    }

    isEqual(book) {
        return book.title === this.title;
    }
}

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    constructor(allBooks) {
        this.#books = allBooks;
        if (typeof allBooks.length !== "number" || allBooks.length < 0) {
        throw new Error(
            "В библиотеке не может быть отрицательное количество книг"
        );
        }
        this.#books = allBooks;
    }

    hasBook(sameBook) {
        let indexBook;
        let result = this.#books.some((book, index) => {
            indexBook = index;
            return book.isEqual(sameBook);
        });
        return (result ? indexBook : false);
    }

    addBook(newBook) {
        try{
        // добавлять книгу в список
            if (!(newBook instanceof Book)) {
            throw new Error("Это не книга!");
            }
            if (typeof this.hasBook(newBook) === "number") {
            throw new Error("Книга с таким названием уже существует в списке");
            }
            return this.#books.push(newBook);
        } catch (error) {
            console.log(error.message);
        }
    }

    removeBook(remBook) {
        let bookIndexFalse = this.hasBook(remBook);
        try{
        // добавлять книгу в список
            if (typeof bookIndexFalse !== "number") {
            throw new Error("Книги с таким названием нет в библиотеке");
            }
            return this.#books.splice(bookIndexFalse, 1);
        } catch (error) {
            console.log(error.message);
        }
    }
}

const book1 = new Book("Three Fats");
const book2 = new Book("Pink");
const book3 = new Book("Three Bears");
const book4 = new Book("Three Fats");

const myLibrary = new Library([book1, book2]);

console.log(myLibrary.allBooks);

console.log(myLibrary.addBook(book3));
console.log(myLibrary.allBooks);
console.log(myLibrary.addBook(book4));
console.log(myLibrary.allBooks);
console.log(myLibrary.removeBook(book2));
console.log(myLibrary.allBooks);
console.log(myLibrary.removeBook(book2));
console.log(myLibrary.allBooks);
console.log(myLibrary.hasBook(book2));
console.log(myLibrary.hasBook(book3));






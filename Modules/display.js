import Store from './storeClass.js';

const bookSection = document.querySelector('.books');

export default class DisplayScreen {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => DisplayScreen.addBookToList(book));
  }

  static addBookToList(book) {
    bookSection.innerHTML += `
      <tr>
          <td class="title-author">"${book.title}" by ${book.author}</td>
          <td><button class="remove-btn ${book.id}">Remove</button></td>
      </tr>
      `;
  }

  static deleteBook(element) {
    if (element.classList.contains('remove-btn')) {
      element.parentElement.parentElement.remove();
    }
  }
}

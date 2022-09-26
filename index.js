import Store from './Modules/storeClass.js';

import DisplayScreen from './Modules/display.js';

let counter = 0;
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// display books event
document.addEventListener('DOMContentLoaded', DisplayScreen.displayBooks);

// Add book event
document.querySelector('.add-book').addEventListener('submit', (e) => {
  counter += 1;
  e.preventDefault();
  // getting form values
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const id = counter;

  // instatiate books
  const book = new Book(title, author, id);

  // Display Book to screen
  DisplayScreen.addBookToList(book);
  // Add to local Storage
  Store.addBook(book);
});

document.querySelector('.books').addEventListener('click', (e) => {
  DisplayScreen.deleteBook(e.target);
  // Remove book from Local Storage
  Store.removeBook(parseInt(e.target.classList[1], 10));
});

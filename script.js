let myLibrary = [];
let newButton = document.getElementById('new-book');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const potter = new Book("harry potter", "jk rowling", '1');
myLibrary.push(potter);


function fillLibrary() {
    myLibrary.forEach(book => {
        let cardGrid = document.getElementById('card-grid');
        let newCard = document.createElement('div');
        let bookTitle = document.createElement('h3');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('h3');

        newCard.setAttribute('class', 'card');
        bookTitle.innerText = book.title;
        bookAuthor.innerText = book.author;
        bookPages.innerText = book.pages;

        cardGrid.appendChild(newCard);
        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
    });
}

newButton.addEventListener('click', (e) => {

})
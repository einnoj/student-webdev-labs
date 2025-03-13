const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    // Retrieve the data from the API
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      data.forEach((book) => {
        console.log(book.name, book.authors[0]);
        addBook(book);
      });
    })

    .catch((error) => {
      console.log(error);
      let element = document.createElement("div");
      element.textContent = "An error occured. Please reload page";
      app.append(element);
    });
};

const addBook = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.author[0];
  released.textContent = book.released;
  pages.textContent = book.numberOfPages;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  app.append(element);
};

fetchData(url);

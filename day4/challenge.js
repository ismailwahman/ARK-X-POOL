// first we're going to import the book data from the BOOKS.json file

const books = require("./books.json");


// this is a function to get the price of a book by its name
function priceOfBook(bookName) {
  // write your code here

  // Iterating through the array of books
  for (let i = 0; i < books.length; i++) {

     // we used an if statement to Check if the current book's title matches the specified bookName
    if (books[i].title === bookName) {

      // and if found, return the price of the book
      return books[i].price;
    }
  }

  // if the book is not found, just return null.
  return null;
}




// this function is to get a list of affordable books within a specified budget
function affordableBooks(budget) {
  // write your code here

  // Create an empty array to store affordable books
  const affordable = [];

  // Iterate through the array of books
  for (let i = 0; i < books.length; i++) {
    // using an if statement to check if the current book's price is within the specified budget
    if (books[i].price <= budget) {

      // If within budget, add the book to the affordable array
      affordable.push(books[i]);
    }
  }

  // return the array of affordable books
  return affordable;
}


// this function is used to find books by a specific genre
function findBookByGenre(genre) {
  // write your code here

  // we created an array to store books of the specified genre
  const genreBooks = [];

  // Iterate through the array of books
  for (let i = 0; i < books.length; i++) {
    // Flag to indicate if the current book belongs to the specified genre
    let belongsToGenre = false;
    // Iterate through the genres of the current book
    for (let j = 0; j < books[i].genres.length; j++) {
      // Check if the current genre matches the specified genre
      if (books[i].genres[j] === genre) {
        belongsToGenre = true;
        break; // Exit the loop once a match is found
      }
    }
    // If the book belongs to the specified genre, add it to the array
    if (belongsToGenre) {
      genreBooks.push(books[i]);
    }
  }
  // return the array of books in the specified genre
  return genreBooks;
}


// a function to group books by genre
function groupByGenre() {
  // write your code here

  // we created an empty object to store grouped books
  const grouped = {};

  // Iterating through the array of books
  for (let i = 0; i < books.length; i++) {

    // Get the genres of the current book
    const genres = books[i].genres;

    // Iterating through the genres of the current book
    for (let j = 0; j < genres.length; j++) {

      // Get the individual genre
      const genre = genres[j];

      // If the genre is not already a key in the grouped object, create an empty array for it
      if (!grouped[genre]) {
        grouped[genre] = [];
      }

      // Add the current book to the array corresponding to its genre
      grouped[genre].push(books[i]);
    }
  }

  // Return the grouped object
  return grouped;
}

// this function uses bubble sort method and sorts the books by price in ascending order
function sortBooksByPrice() {
  // write your code here

  // Create a shallow copy of the books array
  const sorted = [...books];

  // an Outer loop for the number of passes
  for (let i = 0; i < sorted.length - 1; i++) {
    // an Inner loop for each pass
    for (let j = 0; j < sorted.length - i - 1; j++) {

      // an if statement Compare adjacent books by price and swap if necessary
      if (sorted[j].price > sorted[j + 1].price) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  // Return the sorted array
  return sorted;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();

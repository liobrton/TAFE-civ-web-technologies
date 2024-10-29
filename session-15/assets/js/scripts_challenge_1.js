// Challenge 1
// Import the array of books
import books from "./books.js";

// Find a book by ISBN
const findBookByISBN = (ISBN) => {
    // Use the find function to search for a ISBN number (checking against book.ISBN)
    const foundBook = books.find((book) => book.ISBN === ISBN);
    // If found log a title
    if (foundBook) {
        console.log(foundBook);
    } else {
        console.log(`No book with that ISBN (${ISBN}) was found.`);
    }
};

// Double the prices of all books
const doublePrices = () => {
    // Create a constant which takes the result of mapping over the books
    // Use each iteration to double the price of the book
    // adding it to doubledPrices
    const doubledPrices = books.map((book) => ({ price: book.price * 2 }));

    console.log("Doubled prices:", doubledPrices);
};

// Calculate the total price of all books
const calculateTotalPrice = () => {
    // Create a constant that take the result of the reduce function
    // Also add a total accumulator to the reduce function arguments
    const totalPrice = books.reduce((total, book) => total + book.price, 0);
    // total is the current number that will be returned
    // book is the current iterated item
    // total + book.price is the action / function that is being used to manipulate total, generally uses both total and the current iterated item
    // 0 is the iteration to begin at
    console.log("Total price of all books:", totalPrice);
};

// DONT FORGET to Call the functions
findBookByISBN("ISBN-222");
doublePrices();
calculateTotalPrice();

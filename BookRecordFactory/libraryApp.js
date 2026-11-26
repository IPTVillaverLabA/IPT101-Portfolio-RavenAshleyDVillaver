import { book1, book2, book3, getBookStatus } from './bookModule.js';

console.log("===== BOOK RECORD FACTORY =====");

console.log("");
console.log("BOOK 1");
console.log("Title: " + book1.title);
console.log("Author: " + book1.author);
console.log("Year: " + book1.year);
console.log("Pages: " + book1.pages);
console.log(getBookStatus(book1, "Available"));
console.log(book1.getBookLabel());

console.log("");
console.log("BOOK 2");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);
console.log("Year: " + book2.year);
console.log("Pages: " + book2.pages);
console.log(getBookStatus(book2, "Borrowed"));
console.log(book2.getBookLabel());

console.log("");
console.log("BOOK 3");
console.log("Title: " + book3.title);
console.log("Author: " + book3.author);
console.log("Year: " + book3.year);
console.log("Pages: " + book3.pages);
console.log(getBookStatus(book3, "Available"));
console.log(book3.getBookLabel());

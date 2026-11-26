export function createBook(title, author, year, pages) {
    return {
        title: title,
        author: author,
        year: year,
        pages: pages,

        getBookLabel: function() {
            return `${this.title} by ${this.author}, ${this.year} - ${this.pages} pages`;
        }
    };
}

export const book1 = createBook(
    "The Little Prince",
    "Antoine de Saint-Exupery",
    1943,
    96
);

export const book2 = createBook(
    "Harry Potter",
    "J.K. Rowling",
    1997,
    223
);

export const book3 = createBook(
    "Romeo and Juliet",
    "William Shakespeare",
    1597,
    120
);

export function getBookStatus(book, status) {
    return `${book.title} by ${book.author} - Status: ${status}`;
}

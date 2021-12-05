const getBooksByGenre = (books, genre) => books.filter(book => book.genre === genre);

module.exports = {
    getBooksByGenre
};

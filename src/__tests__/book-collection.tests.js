const {
    getBooksByGenre
} = require('../book-collection.js');

describe('getBooksByGenre', () => {
    const books = [
        {
            name: 'The Princess Bride',
            genre: 'Fantasy',
            author: 'William Goldman'
        },
        {
            name: 'Artemis Fowl',
            genre: 'Fantasy',
            author: 'Eoin Colfer'
        },
        {
            name: 'Other',
            genre: 'Horror',
            author: 'Some Bloke'
        }
    ];

    const genres = [
        'Fantasy',
        'Horror',
        'Sci-Fi'
    ]

    test('returns an array', () => {
        expect(Array.isArray(getBooksByGenre(books, genres[0]))).toEqual(true);
    });
    test('returns an empty array when there are no books with that genre', () => {
        expect(getBooksByGenre(books, genres[2])).toEqual([]);
    });
    test('returns the right books when the genre does exist', () => {
        expect(getBooksByGenre(books, genres[1])).toEqual([
            {
                name: 'Other',
                genre: 'Horror',
                author: 'Some Bloke'
            }
        ]);
    });
});

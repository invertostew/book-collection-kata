const {
    getBooksByGenre
} = require('../book-collection.js');

describe('getBooksByGenre', () => {
    test('returns an array', () => {
        expect(Array.isArray(getBooksByGenre())).toEqual(true);
    });
    test('returns an empty array when there are no books with that genre', () => {
        expect(getBooksByGenre('crime/thriller')).toEqual([]);
    });
    test('returns the right books when the genre does exist', () => {
        expect(getBooksByGenre('horror')).toEqual([
            {
                name: 'The Princess Bride',
                genre: 'Horror',
                author: 'Romy Greenfield'
            }
        ]);
    });
});
